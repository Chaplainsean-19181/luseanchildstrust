import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { PendingContent } from "@/components/site/Cards";
import {
  contactStatus,
  partnerAudiences,
  partners,
  partnershipAreas,
  partnersPlaceholder,
  photos,
} from "@/content/site";


export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Corporate CSR, foundation, NGO, government, school and faith-based partnerships that scale impact for marginalized children.",
      },
      { property: "og:title", content: "Partners — Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "Partner with a foundation that reports transparently and delivers measurable outcomes.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/partners" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: Partners,
});

const partnershipTypes = partnershipAreas;


function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="Partnership that multiplies impact"
        description="We build long-term relationships with organisations that want measurable, reportable outcomes for children — not one-off gestures."
        image={photos.textbooks}
      />

      <Section>
        <SectionHeading
          eyebrow="Who we partner with"
          title="Partnership is open to organisations and individuals"
          description="We welcome partners who share our commitment to compassion, integrity, accountability, transparency, responsible stewardship and Christian service."
          align="center"
        />
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3">
          {partnerAudiences.map((a) => (
            <span
              key={a}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground"
            >
              {a}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Ways to partner"
          title="Potential partnership areas"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnershipTypes.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="font-display text-lg font-bold">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our Partners"
          title="Standing with children alongside us"
          description="We gratefully recognise the partners and supporters of Lusean Child's Trust Foundation. Approved partner logos will be added once supplied."
          align="center"
        />
        {partners.length > 0 ? (
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-border bg-card p-7 text-center shadow-soft"
              >
                <p className="font-display text-lg font-semibold">{partner.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{partner.type}</p>
              </div>
            ))}
          </div>
        ) : (
          <PendingContent title="Partner details coming soon" body={partnersPlaceholder} />
        )}
      </Section>

      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Start a conversation"
            title="Let's design a partnership around your goals"
            description={`Share your focus areas and how you would like to help. Partnership enquiries: ${contactStatus.email}`}
            tone="ink"
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild variant="gold" size="lg">
              <a href={`mailto:${contactStatus.email}`}>PARTNER WITH US</a>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/contact">Contact page</Link>
            </Button>
          </div>
        </div>
      </Section>


      <CTABand />
    </>
  );
}
