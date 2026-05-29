import { useEffect, useRef, useState, useCallback } from "react";

export function Gradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragRef = useRef<{
    x: number;
    y: number;
    rx: number;
    ry: number;
  } | null>(null);
  const rotRef = useRef({ x: 0.52, y: -0.55 });
  const stateRef = useRef({
    ball: { wx: 0.15, wy: 0.75 },
    trail: [] as { x: number; y: number }[],
    steps: 0,
    stopped: false,
  });

  const [lr, setLr] = useState(8);
  const [lossVal, setLossVal] = useState("—");
  const [dropMode, setDropMode] = useState(false);

  const N = 28;

  const loss = (x: number, y: number) =>
    0.6 * (Math.pow(x - 0.5, 2) * 3 + Math.pow(y - 0.5, 2) * 2) +
    0.18 * Math.sin(x * 9) * Math.cos(y * 7) * 0.5 +
    0.05;

  const dlossX = (x: number, y: number) =>
    0.6 * 6 * (x - 0.5) + 0.18 * 9 * Math.cos(x * 9) * Math.cos(y * 7) * 0.5;

  const dlossY = (x: number, y: number) =>
    0.6 * 4 * (y - 0.5) - 0.18 * 7 * Math.sin(x * 9) * Math.sin(y * 7) * 0.5;

  const { lossMin, lossMax } = (() => {
    let mn = Infinity,
      mx = -Infinity;
    for (let i = 0; i <= 20; i++)
      for (let j = 0; j <= 20; j++) {
        const v = loss(i / 20, j / 20);
        if (v < mn) mn = v;
        if (v > mx) mx = v;
      }
    return { lossMin: mn, lossMax: mx };
  })();

  const lossSpan = lossMax - lossMin;

  const lossColor = (v: number, dark: boolean) => {
    const t = (v - lossMin) / lossSpan;
    if (dark) {
      return `rgb(${Math.round(20 + t * 60)},${Math.round(180 - t * 120)},${Math.round(180 - t * 80)})`;
    }
    return `rgb(${Math.round(220 - t * 120)},${Math.round(240 - t * 120)},${Math.round(240 - t * 60)})`;
  };

  const project = useCallback(
    (
      wx: number,
      wy: number,
      wz: number,
      W: number,
      H: number,
      scale: number,
    ) => {
      const { x: rotX, y: rotY } = rotRef.current;
      const cx = Math.cos(rotY),
        sx = Math.sin(rotY);
      const cy = Math.cos(rotX),
        sy = Math.sin(rotX);
      const x0 = wx - 0.5,
        y0 = wz - 0.5,
        z0 = wy - 0.5;
      const x1 = x0 * cx - z0 * sx;
      const z1 = x0 * sx + z0 * cx;
      const y2 = y0 * cy - z1 * sy;
      const z2 = y0 * sy + z1 * cy;
      return { sx: W / 2 + x1 * scale, sy: H / 2 - y2 * scale, z: z2 };
    },
    [],
  );

  // Build a lookup grid of projected surface points for click-to-world mapping
  const buildProjectedGrid = useCallback(
    (W: number, H: number, scale: number) => {
      const pts: { sx: number; sy: number; wx: number; wy: number }[] = [];
      const steps = 40;
      for (let i = 0; i <= steps; i++) {
        for (let j = 0; j <= steps; j++) {
          const wx = i / steps;
          const wy = j / steps;
          const wz = loss(wx, wy);
          const p = project(wx, wy, wz, W, H, scale);
          pts.push({ sx: p.sx, sy: p.sy, wx, wy });
        }
      }
      return pts;
    },
    [project],
  );

  const screenToWorld = useCallback(
    (screenX: number, screenY: number, W: number, H: number, scale: number) => {
      const grid = buildProjectedGrid(W, H, scale);
      let best = grid[0];
      let bestDist = Infinity;
      for (const pt of grid) {
        const d = Math.pow(pt.sx - screenX, 2) + Math.pow(pt.sy - screenY, 2);
        if (d < bestDist) {
          bestDist = d;
          best = pt;
        }
      }
      return { wx: best.wx, wy: best.wy };
    },
    [buildProjectedGrid],
  );

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const W = wrap.offsetWidth || 400;
    const H = 280;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.height = `${H}px`;
    const ctx = canvas.getContext("2d")!;
    ctx.scale(dpr, dpr);

    const dark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    const scale = W * 0.38;

    ctx.clearRect(0, 0, W, H);

    const cells: {
      p00: ReturnType<typeof project>;
      p10: ReturnType<typeof project>;
      p11: ReturnType<typeof project>;
      p01: ReturnType<typeof project>;
      zm: number;
      avgZ: number;
    }[] = [];

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x0 = i / N,
          x1 = (i + 1) / N;
        const y0 = j / N,
          y1 = (j + 1) / N;
        const z00 = loss(x0, y0),
          z10 = loss(x1, y0);
        const z01 = loss(x0, y1),
          z11 = loss(x1, y1);
        const zm = (z00 + z10 + z01 + z11) / 4;
        const p00 = project(x0, y0, z00, W, H, scale);
        const p10 = project(x1, y0, z10, W, H, scale);
        const p11 = project(x1, y1, z11, W, H, scale);
        const p01 = project(x0, y1, z01, W, H, scale);
        const avgZ = (p00.z + p10.z + p11.z + p01.z) / 4;
        cells.push({ p00, p10, p11, p01, zm, avgZ });
      }
    }

    cells.sort((a, b) => a.avgZ - b.avgZ);

    const gridAlpha = dark ? "0.18" : "0.22";
    for (const c of cells) {
      ctx.beginPath();
      ctx.moveTo(c.p00.sx, c.p00.sy);
      ctx.lineTo(c.p10.sx, c.p10.sy);
      ctx.lineTo(c.p11.sx, c.p11.sy);
      ctx.lineTo(c.p01.sx, c.p01.sy);
      ctx.closePath();
      ctx.fillStyle = lossColor(c.zm, dark);
      ctx.fill();
      ctx.strokeStyle = `rgba(${dark ? "255,255,255" : "0,0,0"},${gridAlpha})`;
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }

    const { ball, trail } = stateRef.current;

    if (trail.length > 1) {
      const pts = trail.map((t) =>
        project(t.x, t.y, loss(t.x, t.y) + 0.008, W, H, scale),
      );
      ctx.beginPath();
      ctx.moveTo(pts[0].sx, pts[0].sy);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].sx, pts[i].sy);
      ctx.strokeStyle = dark ? "rgba(93,202,165,0.85)" : "rgba(0,100,100,0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      for (let i = 0; i < pts.length - 1; i++) {
        const a = i / (pts.length - 1);
        ctx.beginPath();
        ctx.arc(pts[i].sx, pts[i].sy, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(93,202,165,${(0.3 + a * 0.5).toFixed(2)})`
          : `rgba(0,100,100,${(0.25 + a * 0.5).toFixed(2)})`;
        ctx.fill();
      }
    }

    const bz = loss(ball.wx, ball.wy);
    const bp = project(ball.wx, ball.wy, bz + 0.012, W, H, scale);
    ctx.beginPath();
    ctx.arc(bp.sx, bp.sy, 5.5, 0, Math.PI * 2);
    ctx.fillStyle = dark ? "#5DCAA5" : "#009b9b";
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bp.sx, bp.sy, 5.5, 0, Math.PI * 2);
    ctx.strokeStyle = dark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.15)";
    ctx.lineWidth = 1;
    ctx.stroke();

    setLossVal(bz.toFixed(3));
  }, [project]);

  const runStep = useCallback(
    (lrVal: number) => {
      const s = stateRef.current;
      if (s.stopped) return;
      const gx = dlossX(s.ball.wx, s.ball.wy);
      const gy = dlossY(s.ball.wx, s.ball.wy);
      s.ball.wx = Math.max(0.02, Math.min(0.98, s.ball.wx - lrVal * gx));
      s.ball.wy = Math.max(0.02, Math.min(0.98, s.ball.wy - lrVal * gy));
      s.trail.push({ x: s.ball.wx, y: s.ball.wy });
      if (s.trail.length > 80) s.trail.shift();
      s.steps++;
      draw();
      const mag = Math.sqrt(gx * gx + gy * gy) * lrVal;
      if (mag > 0.0003 && s.steps < 500) {
        animRef.current = setTimeout(() => runStep(lrVal), 35);
      }
    },
    [draw],
  );

  const startRun = useCallback(
    (lrVal: number) => {
      if (animRef.current) clearTimeout(animRef.current);
      stateRef.current.stopped = false;
      stateRef.current.steps = 0;
      stateRef.current.trail = [
        { x: stateRef.current.ball.wx, y: stateRef.current.ball.wy },
      ];
      runStep(lrVal);
    },
    [runStep],
  );

  const reset = useCallback(() => {
    if (animRef.current) clearTimeout(animRef.current);
    stateRef.current = {
      ball: { wx: 0.1 + Math.random() * 0.15, wy: 0.6 + Math.random() * 0.2 },
      trail: [],
      steps: 0,
      stopped: false,
    };
    draw();
    setTimeout(() => startRun(lr / 100), 200);
  }, [draw, startRun, lr]);

  useEffect(() => {
    draw();
    const id = setTimeout(() => startRun(lr / 100), 300);
    const ro = new ResizeObserver(draw);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => {
      clearTimeout(id);
      if (animRef.current) clearTimeout(animRef.current);
      ro.disconnect();
    };
  }, []);

  const getCanvasDims = () => {
    const wrap = wrapRef.current;
    const W = wrap?.offsetWidth || 400;
    const scale = W * 0.38;
    return { W, H: 280, scale };
  };

  const onMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (dropMode) return; // handled by onClick
    dragRef.current = {
      x: e.clientX,
      y: e.clientY,
      rx: rotRef.current.x,
      ry: rotRef.current.y,
    };
  };

  const onCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dropMode) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;
    const { W, H, scale } = getCanvasDims();
    const { wx, wy } = screenToWorld(screenX, screenY, W, H, scale);
    if (animRef.current) clearTimeout(animRef.current);
    stateRef.current = {
      ball: { wx, wy },
      trail: [{ x: wx, y: wy }],
      steps: 0,
      stopped: false,
    };
    draw();
    setTimeout(() => startRun(lr / 100), 80);
    setDropMode(false);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current || dropMode) return;
      rotRef.current.y =
        dragRef.current.ry + (e.clientX - dragRef.current.x) * 0.008;
      rotRef.current.x = Math.max(
        -0.2,
        Math.min(
          1.2,
          dragRef.current.rx - (e.clientY - dragRef.current.y) * 0.006,
        ),
      );
      draw();
    };
    const onMouseUp = () => {
      dragRef.current = null;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [draw, dropMode]);

  const btnBase: React.CSSProperties = {
    fontSize: 10,
    padding: "3px 8px",
    cursor: "pointer",
    border: "0.5px solid var(--curr-line)",
    borderRadius: 4,
    background: "transparent",
    color: "var(--curr-ink)",
  };

  return (
    <div
      ref={wrapRef}
      style={{ width: "100%", overflow: "hidden", fontFamily: "monospace" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          cursor: dropMode ? "crosshair" : "grab",
        }}
        onMouseDown={onMouseDown}
        onClick={onCanvasClick}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          paddingTop: 6,
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: 10, color: "var(--curr-muted)" }}>lr</span>
        <input
          type="range"
          min={1}
          max={25}
          step={1}
          value={lr}
          style={{ flex: 1, minWidth: 60 }}
          onChange={(e) => setLr(parseInt(e.target.value))}
        />
        <span
          style={{
            fontSize: 10,
            fontWeight: 500,
            color: "var(--curr-ink)",
            minWidth: 28,
          }}
        >
          {(lr / 100).toFixed(2)}
        </span>
        <button
          onClick={() => setDropMode((d) => !d)}
          style={{
            ...btnBase,
            background: dropMode ? "var(--curr-mint)" : "transparent",
            color: dropMode ? "#fff" : "var(--curr-ink)",
            border: dropMode
              ? "0.5px solid var(--curr-mint)"
              : "0.5px solid var(--curr-line)",
          }}
        >
          {dropMode ? "click surface…" : "drop"}
        </button>
        <button onClick={reset} style={btnBase}>
          reset
        </button>
        <span style={{ fontSize: 10, color: "var(--curr-muted)" }}>
          {lossVal !== "—" ? `loss: ${lossVal}` : ""}
        </span>
      </div>
    </div>
  );
}
