import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/rehepa-logo.jpeg";
import { useTheme } from "@/lib/theme-context";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/72 backdrop-blur-2xl">
      <div className="brand-stripe h-0.5 w-full" />
      <div className="mx-auto flex max-w-site items-center justify-between px-6 lg:px-10 py-4">
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-primary/25 blur-xl transition-opacity group-hover:opacity-100" />
            <img
              src={logo}
              alt="Rehepa Aerospace"
              className="relative h-14 w-14 rounded-2xl border border-border/60 object-cover shadow-lg"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl font-bold tracking-tight">REHEPA</div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
              Aerospace Ltd
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-3 rounded-full border border-border/70 bg-card/70 p-2 shadow-sm md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "bg-primary/12 text-primary font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Request a Quote
          </Link>
          <button
            className="rounded-full border border-border/70 bg-card/60 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            className="rounded-full border border-border/70 bg-card/60 p-2.5 text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background/92 md:hidden">
          <nav className="mx-auto flex max-w-site flex-col gap-2 px-6 lg:px-10 py-5">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-transparent px-4 py-3 text-sm text-muted-foreground hover:border-border hover:bg-secondary hover:text-primary"
                activeProps={{
                  className: "border-primary/25 bg-primary/10 text-primary font-semibold",
                }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
