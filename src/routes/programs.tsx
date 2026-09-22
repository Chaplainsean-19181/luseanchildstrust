import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { programs, photos } from "@/content/site";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Education support, school essentials, feeding and basic needs, water, sanitation and school development, community outreach and targeted child support in Kitwe, Zambia.",
      },
      { property: "og:title", content: "Our Programs — Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "The program areas through which Lusean Child's Trust Foundation supports vulnerable children.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/programs" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Practical programs. Lasting change."
        description="Our program areas reflect the work the Foundation is actively delivering in schools and communities across Kitwe, Copperbelt Province."
        image={photos.feeding}
      />

      <Section>
        <div className="space-y-20">
          {programs.map((program, index) => (
            <article
              key={program.slug}
              id={program.slug}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <img
                src={program.image}
                alt={program.title}
                loading="lazy"
                width={1200}
                height={900}
                className={`w-full rounded-2xl object-cover shadow-lift ${index % 2 === 1 ? "lg:order-2" : ""}`}
              />
              <div>
                <p className="text-eyebrow text-primary">Program {String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{program.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-foreground/85">{program.summary}</p>
                <p className="mt-4 leading-relaxed text-muted-foreground">{program.detail}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button asChild variant="hero">
                    <Link to="/donate">Support this program</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/get-involved">Get involved</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
