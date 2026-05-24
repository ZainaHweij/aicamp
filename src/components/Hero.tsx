import { ArrowUpRight, ArrowDown } from "lucide-react";

const tags = [
  "Machine Learning",
  "Neural Nets",
  "Prompt Eng.",
  "Computer Vision",
  "NLP",
];

export function Hero() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[var(--hero-bg-from)] to-[var(--hero-bg-to)] font-mono text-[var(--hero-ink)]">
      <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 lg:grid-cols-[1.6fr_1fr]">
        {/* LEFT COLUMN */}
        <div className="flex flex-col border-[var(--hero-line)] lg:border-r">
          {/* Top: title */}
          <div className="flex-1 px-8 py-10 lg:px-14 lg:py-16">
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] text-[var(--hero-muted)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--hero-mint)]" />
              SOUTHWEST WASHINGTON · 1-MONTH INTENSIVE
            </div>

            <h1 className="mt-10 font-sans text-6xl font-bold leading-[1.05] tracking-tight lg:text-8xl">
              <span className="text-[var(--hero-mint)]">AI</span> Camp
              <br />
              <span className="text-[var(--hero-muted)]/70">Southwest WA</span>
            </h1>

            <p className="mt-10 max-w-md text-base leading-relaxed text-[var(--hero-muted)]">
              Build real AI. Learn to think like a machine. One month. Zero
              prerequisites. Infinite potential.
            </p>
          </div>

          {/* Middle: tags */}
          <div className="border-t border-[var(--hero-line)] px-8 py-8 lg:px-14">
            <div className="flex flex-wrap gap-3">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--hero-line)] px-5 py-2 text-xs tracking-[0.15em] text-[var(--hero-muted)] uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom: CTAs */}
          <div className="relative border-t border-[var(--hero-line)] px-8 py-8 lg:px-14">
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-[var(--hero-ink)] bg-background px-6 py-3 text-sm font-semibold transition hover:bg-[var(--hero-ink)] hover:text-background">
                Apply Now <ArrowUpRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl border border-[var(--hero-line)] bg-background px-6 py-3 text-sm font-semibold transition hover:border-[var(--hero-ink)]">
                See Curriculum
              </button>
            </div>

            {/* scroll indicator (overlap with column edge) */}
            <div className="absolute -right-6 bottom-6 hidden h-12 w-12 items-center justify-center rounded-full border border-[var(--hero-line)] bg-background lg:flex">
              <ArrowDown className="h-4 w-4 text-[var(--hero-muted)]" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col">
          {/* Stats */}
          <div className="flex-1 px-8 py-10 lg:px-12 lg:py-16">
            <Stat value="4" unit="wk" label="Program Length" />
            <Divider />
            <Stat value="12" unit="+" label="Projects Built" />
            <Divider />
            <Stat value="0" label="Prerequisites" />
          </div>

          {/* Enrollment */}
          <div className="border-t border-[var(--hero-line)] px-8 py-10 lg:px-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--hero-mint)] px-5 py-2.5 text-xs tracking-[0.2em] text-[var(--hero-ink)] uppercase">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--hero-mint)]" />
              Enrollment Open
            </div>
          </div>

          {/* Closing */}
          <div className="border-t border-[var(--hero-line)] px-8 py-10 text-right lg:px-12">
            <div className="font-sans text-2xl font-bold">SUMMER 2025</div>
            <div className="mt-2 text-xs tracking-[0.2em] text-[var(--hero-muted)] uppercase">
              Applications Closing Soon
            </div>
          </div>
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
    <div className="py-2">
      <div className="flex items-start gap-1">
        <span className="font-sans text-6xl font-bold leading-none">
          {value}
        </span>
        {unit && (
          <span className="font-sans text-xl font-semibold text-[var(--hero-mint)]">
            {unit}
          </span>
        )}
      </div>
      <div className="mt-3 text-xs tracking-[0.2em] text-[var(--hero-muted)] uppercase">
        {label}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="my-6 h-px w-full bg-[var(--hero-line)]" />;
}
