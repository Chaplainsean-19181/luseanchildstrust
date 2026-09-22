import { createFileRoute } from "@tanstack/react-router";

import { CTABand, PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { StatGrid } from "@/components/site/StatGrid";
import { PendingContent, StoryCard } from "@/components/site/Cards";
import { outreach, schools, stories, storiesPlaceholder, photos } from "@/content/site";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Impact statistics, outcomes and accountability reporting showing how support reaches children, schools and communities.",
      },
      { property: "og:title", content: "Our Impact — Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "Children reached, schools supported, communities served — measured and reported.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/impact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Change you can count"
        description="We report only what we have verified: children reached, schools supported, learning materials provided, learners fed and infrastructure delivered."
        image={photos.boreholeCommunity}
      />

      <Section>
        <SectionHeading
          eyebrow="By the numbers"
          title="Impact to date"
          description="Verified figures covering Foundation programs, updated as new work is completed."
        />
        <StatGrid className="mt-12" />
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="How change happens"
          title="From support to sustained outcomes"
          align="center"
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { t: "1. Identify", d: "We gather beneficiary information with schools and directly within communities to identify children requiring support." },
            { t: "2. Deliver", d: "We provide learning materials, school essentials, feeding, sanitation infrastructure and targeted child support." },
            { t: "3. Record", d: "Every item delivered is recorded school by school, so support can be verified and reported." },
          ].map((step) => (
            <li key={step.t} className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h3 className="font-display text-xl font-bold text-primary">{step.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="default">
        <SectionHeading
          eyebrow="Where the work happens"
          title={`${schools.length} schools and ${outreach.length} community outreach initiative`}
          description="A full record of the support delivered at each school and community is published on our Projects page."
          align="center"
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Stories of Hope" title="Impact with a face" align="center" />
        {stories.length > 0 ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        ) : (
          <PendingContent title="Stories coming soon" body={storiesPlaceholder} />
        )}
      </Section>

      <CTABand />
    </>
  );
}
