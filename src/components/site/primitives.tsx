import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Uppercase mono eyebrow with a leading accent tick. */
export function Eyebrow({
  children,
  onInk = false,
  className,
}: {
  children: ReactNode;
  onInk?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-6 bg-accent" aria-hidden="true" />
      <span className={cn("label-tech", onInk ? "text-ink-muted" : "text-muted-foreground")}>
        {children}
      </span>
    </div>
  );
}

/** Accent CTA — sharp offset shadow, no blur. Always routes to /contact. */
export function CtaButton({
  children = "Request Early Access",
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Link
      to="/contact"
      className={cn(
        "inline-flex items-center justify-center border border-foreground bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all duration-150",
        "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-offset active:translate-x-0 active:translate-y-0 active:shadow-none",
        className,
      )}
    >
      {children}
    </Link>
  );
}

/** Page header used by /services, /about, /contact. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="grid-paper border-b border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
      </div>
    </section>
  );
}

/** Bento cell: hairline borders shared across the grid, crisp hover. */
export function BentoCell({
  children,
  className,
  onInk = false,
}: {
  children: ReactNode;
  className?: string;
  onInk?: boolean;
}) {
  return (
    <div
      className={cn(
        "group relative p-8 transition-all duration-150 lg:p-10",
        onInk
          ? "bg-ink hover:bg-[color-mix(in_oklab,var(--color-ink)_92%,var(--color-ink-foreground))]"
          : "bg-paper-raised hover:-translate-y-0.5 hover:bg-background",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 border opacity-0 transition-opacity duration-150 group-hover:opacity-100",
          onInk ? "border-accent/70" : "border-accent",
        )}
      />
      {children}
    </div>
  );
}

/** Big mono index numeral, e.g. 01 */
export function Index({ value, onInk = false }: { value: string; onInk?: boolean }) {
  return (
    <span className={cn("font-mono text-sm tracking-widest", onInk ? "text-accent" : "text-accent")}>
      {value}
    </span>
  );
}
