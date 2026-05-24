export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        page-grid
        mx-auto
        max-w-7xl
        px-[clamp(2rem,8vw,8rem)]
        py-24
        grid
        gap-24
        auto-rows-min
      "
    >
      {children}
    </div>
  );
}
