import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { nav, org } from "@/content/site";


export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="kente-rule" />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src=/lusean-logo.jpg"
            alt="Lusean Child's Foundation logo"
            width={1920}
            height={1920}
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
          />
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold tracking-tight sm:text-base">
              Lusean Child's Trust
            </span>
            <span className="block text-[11px] text-muted-foreground">Foundation</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <Link to="/donate">
              <Heart /> Donate
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                activeProps={{ className: "bg-accent text-accent-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="hero" className="mt-2">
              <Link to="/donate" onClick={() => setOpen(false)}>
                Donate Now
              </Link>
            </Button>
            <p className="px-3 pt-3 text-xs text-muted-foreground">{org.coreMessage}</p>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
