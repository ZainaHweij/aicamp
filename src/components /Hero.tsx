import React from 'react'

const topics: string[] = [
  'Machine Learning',
  'Neural Nets',
  'Prompt Eng.',
  'Computer Vision',
  'NLP',
]

const styles: Record<string, React.CSSProperties> = {
  hw: {
    background: '#f0f4f8',
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    maxWidth: 900,
    width: '100%',
    fontFamily: "'Syne', sans-serif",
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: `
      radial-gradient(ellipse 60% 55% at 10% 15%, rgba(18,180,155,0.18) 0%, transparent 65%),
      radial-gradient(ellipse 55% 50% at 88% 80%, rgba(110,80,210,0.14) 0%, transparent 65%),
      radial-gradient(ellipse 40% 40% at 55% 50%, rgba(80,120,220,0.08) 0%, transparent 70%)
    `,
    zIndex: 0,
  },
  grid: {
    position: 'relative',
    zIndex: 1,
    display: 'grid',
    gridTemplateColumns: '1fr 220px',
    gridTemplateRows: 'auto 1px auto 1px auto',
  },
  divh: {
    background: 'rgba(0,0,0,0.07)',
    gridColumn: '1 / 3',
    height: 1,
  },
  cellTitle: {
    gridColumn: 1,
    gridRow: 1,
    padding: '44px 44px 36px',
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'rgba(10,40,60,0.42)',
    marginBottom: 22,
  },
  eyebrowDot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#0ea882',
    flexShrink: 0,
  },
  title: {
    fontSize: 52,
    fontWeight: 800,
    lineHeight: 1,
    letterSpacing: '-0.025em',
    color: '#0d1f2d',
  },
  titleAi: {
    color: '#0ea882',
  },
  titleMuted: {
    color: 'rgba(13,31,45,0.28)',
    fontSize: 38,
    display: 'block',
    marginTop: 4,
  },
  sub: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 12,
    color: 'rgba(13,31,45,0.48)',
    lineHeight: 1.8,
    marginTop: 20,
    letterSpacing: '0.03em',
  },
  cellStats: {
    gridColumn: 2,
    gridRow: 1,
    padding: '44px 32px 36px',
    display: 'flex',
    flexDirection: 'column',
    gap: 22,
    justifyContent: 'center',
    borderLeft: '1px solid rgba(0,0,0,0.07)',
    background: 'rgba(255,255,255,0.45)',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  statNum: {
    fontSize: 36,
    fontWeight: 800,
    color: '#0d1f2d',
    lineHeight: 1,
    letterSpacing: '-0.02em',
  },
  statSup: {
    fontSize: 18,
    color: '#6b7fa8',
    verticalAlign: 'super',
    marginLeft: 2,
  },
  statLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    color: 'rgba(13,31,45,0.38)',
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
  },
  statDivider: {
    height: 1,
    background: 'rgba(0,0,0,0.07)',
  },
  cellTags: {
    gridColumn: 1,
    gridRow: 3,
    padding: '22px 44px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  pill: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(13,31,45,0.45)',
    border: '1px solid rgba(13,31,45,0.12)',
    borderRadius: 100,
    padding: '6px 14px',
    background: 'rgba(255,255,255,0.55)',
  },
  cellBadge: {
    gridColumn: 2,
    gridRow: 3,
    padding: '22px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid rgba(0,0,0,0.07)',
    background: 'rgba(255,255,255,0.45)',
  },
  badgeOpen: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#0a8f6e',
    border: '1px solid rgba(10,143,110,0.3)',
    borderRadius: 100,
    padding: '7px 16px',
    background: 'rgba(10,143,110,0.07)',
    display: 'flex',
    alignItems: 'center',
    gap: 7,
  },
  badgeDot: {
    width: 5,
    height: 5,
    borderRadius: '50%',
    background: '#0ea882',
  },
  cellCta: {
    gridColumn: 1,
    gridRow: 5,
    padding: '28px 44px 42px',
    display: 'flex',
    alignItems: 'center',
    gap: 14,
  },
  btnPrimary: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 700,
    fontSize: 14,
    background: 'linear-gradient(135deg, #0ea882 0%, #6b50d6 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    padding: '13px 28px',
    cursor: 'pointer',
    letterSpacing: '0.03em',
  },
  btnGhost: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 12,
    letterSpacing: '0.07em',
    color: 'rgba(13,31,45,0.5)',
    background: 'rgba(255,255,255,0.6)',
    border: '1px solid rgba(13,31,45,0.15)',
    borderRadius: 8,
    padding: '13px 22px',
    cursor: 'pointer',
  },
  cellSession: {
    gridColumn: 2,
    gridRow: 5,
    padding: '28px 32px 42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid rgba(0,0,0,0.07)',
    background: 'rgba(255,255,255,0.45)',
  },
  sessionLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: 10,
    color: 'rgba(13,31,45,0.38)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 1.8,
  },
  sessionStrong: {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    color: '#0d1f2d',
    fontFamily: "'Syne', sans-serif",
    letterSpacing: 0,
  },
}

export default function Hero() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .badge-dot-anim { animation: pulse 2s ease-in-out infinite; }
        .btn-primary-hover:hover { opacity: 0.85; transform: translateY(-1px); transition: opacity 0.18s, transform 0.12s; }
        .btn-ghost-hover:hover { color: #0d1f2d !important; border-color: rgba(13,31,45,0.4) !important; transition: border-color 0.18s, color 0.18s; }
      `}</style>

      <div style={styles.hw}>
        <div style={styles.overlay} />

        <div style={styles.grid}>
          {/* Title */}
          <div style={styles.cellTitle}>
            <div style={styles.eyebrow}>
              <span style={styles.eyebrowDot} />
              Southwest Washington · 1-Month Intensive
            </div>
            <h1 style={styles.title}>
              <span style={styles.titleAi}>AI</span> Camp
              <span style={styles.titleMuted}>Southwest WA</span>
            </h1>
            <p style={styles.sub}>
              Build real AI. Learn to think like a machine.<br />
              One month. Zero prerequisites. Infinite potential.
            </p>
          </div>

          {/* Stats */}
          <div style={styles.cellStats}>
            <div style={styles.stat}>
              <div style={styles.statNum}>4<sup style={styles.statSup}>wk</sup></div>
              <div style={styles.statLabel}>Program Length</div>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.stat}>
              <div style={styles.statNum}>12<sup style={styles.statSup}>+</sup></div>
              <div style={styles.statLabel}>Projects Built</div>
            </div>
            <div style={styles.statDivider} />
            <div style={styles.stat}>
              <div style={styles.statNum}>0</div>
              <div style={styles.statLabel}>Prerequisites</div>
            </div>
          </div>

          <div style={styles.divh} />

          {/* Pills */}
          <div style={styles.cellTags}>
            {topics.map((t) => (
              <span key={t} style={styles.pill}>{t}</span>
            ))}
          </div>

          {/* Badge */}
          <div style={styles.cellBadge}>
            <div style={styles.badgeOpen}>
              <span style={styles.badgeDot} className="badge-dot-anim" />
              Enrollment Open
            </div>
          </div>

          <div style={styles.divh} />

          {/* CTA */}
          <div style={styles.cellCta}>
            <button
              style={styles.btnPrimary}
              className="btn-primary-hover"
              onClick={() => { /* TODO: navigate to apply */ }}
            >
              Apply Now ↗
            </button>
            <button
              style={styles.btnGhost}
              className="btn-ghost-hover"
              onClick={() => { /* TODO: navigate to curriculum */ }}
            >
              See Curriculum
            </button>
          </div>

          {/* Session */}
          <div style={styles.cellSession}>
            <div style={styles.sessionLabel}>
              <strong style={styles.sessionStrong}>Summer 2025</strong>
              Applications closing soon
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
