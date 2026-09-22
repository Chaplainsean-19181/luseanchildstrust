import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { FlagshipCard, OutreachCard, SchoolCard } from "@/components/site/Cards";
import { outreach, photography, schools, photos } from "@/content/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Work in Schools & Communities — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Verified school projects and community outreach in Kitwe, Copperbelt Province: learning materials, school essentials, feeding, and water and sanitation infrastructure.",
      },
      { property: "og:title", content: "Our Work in Schools & Communities" },
      {
        property: "og:description",
        content:
          "Flagship school projects, schools we have supported and community outreach delivered by Lusean Child's Trust Foundation.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const INITIAL_VISIBLE = 6;

function Projects() {
  const [expanded, setExpanded] = useState(false);

  const flagship = schools.filter((s) => s.flagship);
  const others = schools.filter((s) => !s.flagship);
  const visible = expanded ? others : others.slice(0, INITIAL_VISIBLE);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Our Work in Schools & Communities"
        description="Lusean Child's Trust Foundation works through schools and directly within communities in Kitwe, Copperbelt Province. Every item listed below reflects support the Foundation has verified and delivered."
        image={photos.booksAndShoes}
      />

      <Section>
        <SectionHeading
          eyebrow="Flagship Projects"
          title="Integrated support, delivered end to end"
          description="Selected high-impact projects combining education, school essentials, feeding and infrastructure."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {flagship.map((project) => (
            <FlagshipCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Schools We Have Supported"
          title="Support delivered, school by school"
          description="A record of the verified assistance provided to each supported school."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <SchoolCard key={project.slug} project={project} />
          ))}
        </div>
        {others.length > INITIAL_VISIBLE ? (
          <div className="mt-10 text-center">
            <Button variant="outline" onClick={() => setExpanded((v) => !v)}>
              {expanded ? "Show fewer schools" : `Explore all ${schools.length} schools`}
            </Button>
          </div>
        ) : null}
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Community Outreach"
          title="Working directly within communities"
          description="Initiatives delivered within communities rather than through individual schools. Community outreach beneficiaries are not counted among the schools we support."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {outreach.map((item) => (
            <OutreachCard key={item.slug} item={item} />
          ))}
        </div>
        {photography.usingPlaceholders ? (
          <p className="mt-10 rounded-2xl border border-dashed border-border p-6 text-sm leading-relaxed text-muted-foreground">
            {photography.notice}
          </p>
        ) : null}
      </Section>

      <CTABand />
    </>
  );
}
