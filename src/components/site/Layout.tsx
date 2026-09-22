import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Section({
  children,
  className,
  tone = "default",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "sand" | "ink";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-24",
        tone === "sand" && "bg-sand text-sand-foreground",
        tone === "ink" && "bg-ink text-ink-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "ink";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className={cn("text-eyebrow", tone === "ink" ? "text-gold" : "text-primary")}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "ink" ? "text-ink-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <img
        src={image}
        alt=""
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="max-w-3xl reveal-up">
          <p className="text-eyebrow text-gold">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-warm-gradient">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
          Together, We Can Change a Child's Story.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/90 sm:text-lg">
          Your gift, your partnership or your time becomes education, safety, nutrition and
          opportunity in the life of a marginalized child.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="secondary">
            <Link to="/donate">DONATE NOW</Link>
          </Button>
          <Button asChild size="lg" variant="onDark">
            <Link to="/partners">BECOME A PARTNER</Link>
          </Button>
          <Button asChild size="lg" variant="onDark">
            <Link to="/get-involved">GET INVOLVED</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
