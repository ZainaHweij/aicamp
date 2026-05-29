import { ArrowUpRight } from "lucide-react";

const tags = [
  "Machine Learning",
  "Neural Nets",
  "Gradient Descent",
  "Computer Vision",
];

const heroStyles = `
  .hero-root {
    --hero-mint: #009b9b;
    --hero-ink: oklch(0.18 0.03 200);
    --hero-muted: oklch(0.55 0.02 250);
    --hero-line: oklch(0.9 0.01 250);

    --hero-bg-from: oklch(0.985 0.01 200);
    --hero-bg-mid: oklch(0.96 0.02 260);
    --hero-bg-to: oklch(0.95 0.015 300);

    position: relative;
    overflow: hidden;

    background:
      radial-gradient(circle at 20% 10%, var(--hero-bg-mid) 0%, transparent 55%),
      radial-gradient(circle at 80% 30%, var(--hero-bg-to) 0%, transparent 60%),
      linear-gradient(180deg, var(--hero-bg-from), #f7f7fb);

    color: var(--hero-ink);
    width: 100%;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1.6fr 1fr;
    }

    .hero-col-right {
      border-left: 1px solid var(--hero-line);
    }
  }

  /* MOBILE SYMMETRIC + TIGHTER */
  .hero-cell {
    padding: 1.25rem 1.25rem;
    width: 100%;
  }

  @media (min-width: 1024px) {
    .hero-cell {
      padding: 2rem 2.5rem;
    }

    .hero-cell-right {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  .hero-row-border {
    border-top: 1px solid var(--hero-line);
  }

  .hero-dot {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: var(--hero-mint);
  }

  .hero-pill {
    border: 1px solid var(--hero-line);
    border-radius: 9999px;
    padding: 0.45rem 1rem;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    color: var(--hero-muted);
    text-transform: uppercase;
  }

  .hero-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--hero-ink);
    background: white;
    border-radius: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.2s;
  }

  .hero-btn-primary:hover {
    background: var(--hero-ink);
    color: white;
  }

  .hero-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--hero-line);
    background: white;
    border-radius: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.2s;
  }

  .hero-btn-secondary:hover {
    border-color: var(--hero-ink);
  }

  .hero-enroll-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid var(--hero-mint);
    border-radius: 9999px;
    padding: 0.625rem 1.25rem;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--hero-ink);
    text-transform: uppercase;
  }

  .hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--hero-muted);
  }

  .hero-title {
    font-size: 3.75rem;
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-top: 2.5rem;
  }

  @media (min-width: 1024px) {
    .hero-title {
      font-size: 6rem;
    }
  }

  .hero-mint {
    color: var(--hero-mint);
  }

  .hero-muted {
    color: var(--hero-muted);
  }

  /* TIGHTER SUBTITLE GAP */
  .hero-subtitle {
    margin-top: 1.25rem;
    margin-bottom: 0;
    max-width: 28rem;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--hero-muted);
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .hero-ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .hero-stat-value {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1;
  }

  .hero-stat-unit {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--hero-mint);
    margin-left: 0.25rem;
  }

  .hero-stat-label {
    margin-top: 0.5rem;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    color: var(--hero-muted);
    text-transform: uppercase;
  }

  .hero-stat-divider {
    margin: 1rem 0;
    height: 1px;
    background: var(--hero-line);
  }

  .hero-closing {
    text-align: right;
  }

  .hero-closing-title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .hero-closing-sub {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--hero-muted);
    text-transform: uppercase;
  }
`;

export function Hero() {
  return (
    <section className="hero-root font-mono min-h-screen w-full">
      <style>{heroStyles}</style>

      {/* TOP PADDING + SYMMETRIC HORIZONTAL MARGINS */}
      <div className="hero-grid pt-24 px-6 lg:px-16">
        {/* LEFT TOP */}
        <div className="hero-cell">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            SOUTHWEST WASHINGTON · 1-MONTH INTENSIVE
          </div>

          <h1 className="hero-title">
            <span className="hero-mint">AI</span> Camp
            <br />
            <span className="hero-muted">Southwest WA</span>
          </h1>

          <p className="hero-subtitle">
            We turn motivated high school students into AI builders, by covering
            everything from theory to deployment.
          </p>
        </div>

        {/* RIGHT TOP */}
        <div className="hero-cell hero-cell-right hero-col-right">
          <Stat value="4" unit="wk" label="Program Length" />
          <div className="hero-stat-divider" />
          <Stat value="8" unit="+" label="Projects Built" />
          <div className="hero-stat-divider" />
          <Stat value="0" label="Prerequisites" />
        </div>

        {/* LEFT MID */}
        <div className="hero-cell hero-row-border">
          <div className="hero-tags">
            {tags.map((t) => (
              <span key={t} className="hero-pill">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT MID */}
        <div className="hero-cell hero-cell-right hero-col-right hero-row-border">
          <div className="hero-enroll-badge">
            <span className="hero-dot" />
            Enrollment Open
          </div>
        </div>

        {/* LEFT BOTTOM */}
        <div className="hero-cell hero-row-border">
          <div className="hero-ctas">
            <button className="hero-btn-primary">
              Apply Now <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="hero-btn-secondary">See Curriculum</button>
          </div>
        </div>

        {/* RIGHT BOTTOM */}
        <div className="hero-cell hero-cell-right hero-col-right hero-row-border hero-closing">
          <div className="hero-closing-title">SUMMER 2025</div>
          <div className="hero-closing-sub">Applications Closing Soon</div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  unit,
  label,
}: {
  value: string;
  unit?: string;
  label: string;
}) {
  return (
    <div style={{ padding: "0.25rem 0" }}>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <span className="hero-stat-value">{value}</span>
        {unit && <span className="hero-stat-unit">{unit}</span>}
      </div>
      <div className="hero-stat-label">{label}</div>
    </div>
  );
}
