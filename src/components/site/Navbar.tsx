import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import wordmark from "@/assets/auxide-wordmark.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Our Services" },
  { to: "/about", label: "About Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hideCta = pathname === "/contact";

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="AUXIDE AI home">
          <img src={wordmark.url} alt="AUXIDE AI" className="h-11 w-auto" />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="label-tech text-muted-foreground transition-colors duration-150 hover:text-foreground data-[status=active]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {!hideCta && (
            <Link
              to="/contact"
              className="hidden border border-foreground bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-offset active:translate-y-0 active:shadow-none md:inline-flex"
            >
              Request Early Access
            </Link>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center border border-hairline md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="label-tech border-b border-hairline py-4 text-muted-foreground data-[status=active]:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            {!hideCta && (
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 mb-2 border border-foreground bg-accent px-4 py-3 text-center text-sm font-medium text-accent-foreground"
              >
                Request Early Access
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
