const curriculumStyles = `
  .curriculum-root {
    --curr-mint: #009b9b;
    --curr-ink: oklch(0.18 0.03 200);
    --curr-muted: oklch(0.55 0.02 250);
    --curr-line: oklch(0.9 0.01 250);
    --curr-bg: oklch(0.985 0.01 200);

    background: linear-gradient(
      180deg,
      #f7f7fb,
      oklch(0.96 0.02 260)
    );
    color: var(--curr-ink);
    width: 100%;
  }

  .curriculum-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  @media (min-width: 1024px) {
    .curriculum-container {
      padding: 4rem 3.5rem;
    }
  }

  .curriculum-header {
    margin-bottom: 3rem;
  }

  .curriculum-eyebrow {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    color: var(--curr-muted);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .curriculum-dot {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background: var(--curr-mint);
  }

  .curriculum-title {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
  }

  @media (min-width: 1024px) {
    .curriculum-title {
      font-size: 4rem;
    }
  }

  .curriculum-subtitle {
    margin-top: 1rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--curr-muted);
  }

  .curriculum-bento {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 0;
  }

  @media (max-width: 1024px) {
    .curriculum-bento {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: auto;
    }
  }

  @media (max-width: 640px) {
    .curriculum-bento {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
    }
  }

  .curriculum-box {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /* Day 1 - row 1, col 1-2 (spans 2 cols) */
  .curriculum-box:nth-child(1) {
    grid-column: 1 / span 2;
    grid-row: 1 / span 1;
    border-right: 1px solid var(--curr-line);
    border-bottom: 1px solid var(--curr-line);
  }

  /* Day 2 - row 1, col 3-4 (spans 2 cols) */
  .curriculum-box:nth-child(2) {
    grid-column: 3 / span 2;
    grid-row: 1 / span 1;
    border-bottom: 1px solid var(--curr-line);
  }

  /* Day 3 - row 2, col 1 */
  .curriculum-box:nth-child(3) {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    border-right: 1px solid var(--curr-line);
    border-bottom: 1px solid var(--curr-line);
  }

  /* Day 4 - row 2, col 2 */
  .curriculum-box:nth-child(4) {
    grid-column: 2 / span 1;
    grid-row: 2 / span 1;
    border-right: 1px solid var(--curr-line);
    border-bottom: 1px solid var(--curr-line);
  }

  /* Day 5 - row 2-3, col 3 (spans 2 rows) */
  .curriculum-box:nth-child(5) {
    grid-column: 3 / span 1;
    grid-row: 2 / span 2;
    border-right: 1px solid var(--curr-line);
  }

  /* Day 6 - row 3, col 4 */
  .curriculum-box:nth-child(6) {
    grid-column: 4 / span 1;
    grid-row: 3 / span 1;
  }

  /* Day 7 - row 2, col 4 */
  .curriculum-box:nth-child(7) {
    grid-column: 4 / span 1;
    grid-row: 2 / span 1;
    border-bottom: 1px solid var(--curr-line);
  }

  /* Day 8 - row 3, col 1-2 (spans 2 cols) */
  .curriculum-box:nth-child(8) {
    grid-column: 1 / span 2;
    grid-row: 3 / span 1;
    border-right: 1px solid var(--curr-line);
  }

  @media (max-width: 1024px) {
    .curriculum-bento {
      grid-template-columns: repeat(2, 1fr);
    }

    .curriculum-box:nth-child(1) {
      grid-column: 1 / span 1;
      grid-row: 1 / span 2;
    }

    .curriculum-box:nth-child(2) {
      grid-column: 2 / span 1;
      grid-row: 1 / span 2;
    }

    .curriculum-box:nth-child(5) {
      grid-column: 1 / span 2;
      grid-row: auto;
    }

    .curriculum-box:nth-child(7) {
      grid-column: 1 / span 2;
      grid-row: auto;
    }

    .curriculum-box:nth-child(2),
    .curriculum-box:nth-child(4),
    .curriculum-box:nth-child(8) {
      border-right: none;
    }
  }

  @media (max-width: 640px) {
    .curriculum-box {
      grid-column: 1 !important;
      grid-row: auto !important;
      border-right: none !important;
      border-bottom: 1px solid var(--curr-line);
    }

    .curriculum-box:last-child {
      border-bottom: none;
    }
  }

  .curriculum-box-visual {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .curriculum-box-visual svg {
    width: 100%;
    height: 100%;
  }

  .curriculum-box-day {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--curr-mint);
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  .curriculum-box-date {
    font-size: 0.7rem;
    color: var(--curr-muted);
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }

  .curriculum-box-title {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--curr-ink);
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  .curriculum-box-desc {
    font-size: 0.8rem;
    line-height: 1.4;
    color: var(--curr-muted);
  }

  .curriculum-box.is-inactive {
    opacity: 0.5;
  }

  .curriculum-box.is-inactive .curriculum-box-title {
    text-decoration: line-through;
  }

  .curriculum-box.is-inactive .curriculum-box-day {
    text-decoration: line-through;
  }
`;

export function Curriculum() {
  const days = [
    {
      number: 1,
      date: "June 24",
      title: "Vectors, Dot Products",
      description:
        "AI starts with linear algebra. Weighted sum = single artificial neuron.",
      active: true,
      visual: null,
    },
    {
      number: 2,
      date: "June 27",
      title: "Linear Regression",
      description: "Y = mx + b!! Loss and minimizing error.",
      active: true,
      visual: "regression",
    },
    {
      number: 3,
      date: "July 1",
      title: "Random Forests",
      description: "Tree-based ensemble learning.",
      active: true,
      visual: "forest",
    },
    {
      number: 4,
      date: "July 8",
      title: "Classification Models",
      description: "Probabilities. Sigmoid, softmax.",
      active: true,
      visual: null,
    },
    {
      number: 5,
      date: "July 11",
      title: "Neural Networks Part 1: Theory",
      description: "Fundamentals of neural network architecture.",
      active: true,
      visual: "neural",
    },
    {
      number: 6,
      date: "July 15",
      title: "Construct 2-Layer NN",
      description: "Build and train from scratch.",
      active: true,
      visual: null,
    },
    {
      number: 7,
      date: "July 18",
      title: "Guest Speaker",
      description: "Industry leaders in AI.",
      active: true,
      visual: null,
    },
    {
      number: 8,
      date: "July 22",
      title: "Computer Vision",
      description: "Image classification, object detection.",
      active: true,
      visual: "vision",
    },
  ];

  const renderVisual = (type: string | null) => {
    switch (type) {
      case "regression":
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="regGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#009b9b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="160" r="3" fill="#0066cc" />
            <circle cx="70" cy="130" r="3" fill="#0066cc" />
            <circle cx="100" cy="100" r="3" fill="#0066cc" />
            <circle cx="130" cy="70" r="3" fill="#0066cc" />
            <circle cx="160" cy="40" r="3" fill="#0066cc" />
            <line
              x1="20"
              y1="180"
              x2="180"
              y2="20"
              stroke="url(#regGrad)"
              strokeWidth="2"
            />
          </svg>
        );
      case "forest":
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="forestGrad"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#009b9b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00cc99" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <line
              x1="100"
              y1="20"
              x2="100"
              y2="180"
              stroke="url(#forestGrad)"
              strokeWidth="2"
            />
            <line
              x1="100"
              y1="60"
              x2="60"
              y2="100"
              stroke="url(#forestGrad)"
              strokeWidth="2"
            />
            <line
              x1="100"
              y1="60"
              x2="140"
              y2="100"
              stroke="url(#forestGrad)"
              strokeWidth="2"
            />
            <circle cx="60" cy="100" r="3" fill="#009b9b" />
            <circle cx="140" cy="100" r="3" fill="#009b9b" />
            <circle cx="100" cy="180" r="3" fill="#009b9b" />
          </svg>
        );
      case "neural":
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="neuralGrad"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
              >
                <stop offset="0%" stopColor="#009b9b" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#0066cc" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <circle cx="40" cy="60" r="4" fill="#009b9b" />
            <circle cx="40" cy="100" r="4" fill="#009b9b" />
            <circle cx="40" cy="140" r="4" fill="#009b9b" />
            <circle cx="100" cy="80" r="4" fill="#0066cc" />
            <circle cx="100" cy="120" r="4" fill="#0066cc" />
            <circle cx="160" cy="100" r="4" fill="#ff6b35" />
            <line
              x1="44"
              y1="60"
              x2="96"
              y2="80"
              stroke="url(#neuralGrad)"
              strokeWidth="1"
            />
            <line
              x1="44"
              y1="100"
              x2="96"
              y2="80"
              stroke="url(#neuralGrad)"
              strokeWidth="1"
            />
            <line
              x1="44"
              y1="140"
              x2="96"
              y2="120"
              stroke="url(#neuralGrad)"
              strokeWidth="1"
            />
            <line
              x1="104"
              y1="80"
              x2="156"
              y2="100"
              stroke="url(#neuralGrad)"
              strokeWidth="1"
            />
            <line
              x1="104"
              y1="120"
              x2="156"
              y2="100"
              stroke="url(#neuralGrad)"
              strokeWidth="1"
            />
          </svg>
        );
      case "vision":
        return (
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient
                id="visionGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#009b9b" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <rect
              x="40"
              y="50"
              width="120"
              height="100"
              fill="url(#visionGrad)"
            />
            <circle
              cx="80"
              cy="85"
              r="12"
              fill="none"
              stroke="#0066cc"
              strokeWidth="2"
            />
            <circle
              cx="120"
              cy="110"
              r="15"
              fill="none"
              stroke="#ff6b35"
              strokeWidth="2"
            />
            <path
              d="M 60 140 L 80 120 L 100 135 L 120 115 L 140 140"
              stroke="#009b9b"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="curriculum-root font-mono w-full">
      <style>{curriculumStyles}</style>

      <div className="curriculum-container">
        <div className="curriculum-header">
          <div className="curriculum-eyebrow">
            <span className="curriculum-dot" />
            4-WEEK INTENSIVE CURRICULUM
          </div>
          <h2 className="curriculum-title">Week by Week</h2>
          <p className="curriculum-subtitle">
            From linear algebra to computer vision. Each day builds on the last,
            with hands-on Colab notebooks and interactive visualizations.
          </p>
        </div>

        <div className="curriculum-bento">
          {days.map((day) => (
            <div
              key={day.number}
              className={`curriculum-box ${!day.active ? "is-inactive" : ""}`}
            >
              {day.visual && (
                <div className="curriculum-box-visual">
                  {renderVisual(day.visual)}
                </div>
              )}
              <div>
                <div className="curriculum-box-day">Day {day.number}</div>
                <div className="curriculum-box-date">{day.date}</div>
                <div className="curriculum-box-title">{day.title}</div>
                <div className="curriculum-box-desc">{day.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
