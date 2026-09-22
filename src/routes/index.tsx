import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, GraduationCap, Backpack, Utensils, Droplets, Users, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, SectionHeading, CTABand } from "@/components/site/Layout";
import { StatGrid } from "@/components/site/StatGrid";
import { FlagshipCard, NewsCard, OutreachCard, PendingContent, StoryCard } from "@/components/site/Cards";
import {
  involvement,
  news,
  newsPlaceholder,
  org,
  outreach,
  partners,
  partnersPlaceholder,
  programs,
  schools,
  stories,
  storiesPlaceholder,
  photos,
} from "@/content/site";
import { leadership } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lusean Child's Trust Foundation — Changing and Giving Hope to a Child" },
      {
        name: "description",
        content:
          "A Zambian child-focused foundation in Kitwe, Copperbelt Province. We create change, add value and activate hope through education support, school essentials, feeding, sanitation and community outreach.",
      },
      { property: "og:title", content: "Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "Creating Change. Adding Value. Activating Hope. Supporting vulnerable children in Kitwe, Zambia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const programIcons = [GraduationCap, Backpack, Utensils, Droplets, Users, HeartHandshake];

function Home() {
  const flagship = schools.filter((s) => s.flagship).slice(0, 2);
  const founder = leadership[0]!;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <img
          src={photos.boreholeCommunity}
          alt="Pupils and community members gathered around the borehole installed by Lusean Child's Trust Foundation at Lupili Primary School"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-overlay" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl reveal-up">
            <p className="text-eyebrow text-gold">{org.coreMessage}</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">
              Changing and Giving Hope to a Child
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
              Working in Kitwe, Copperbelt Province, Zambia, we support vulnerable and marginalized
              children through education resources, school essentials, feeding, water and sanitation
              and direct community outreach.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/donate">DONATE</Link>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <Link to="/partners">PARTNER WITH US</Link>
              </Button>
              <Button asChild size="lg" variant="onDark">
                <Link to="/news" hash="lusean-in-action">
                  WATCH OUR IMPACT
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="kente-rule" />
      </section>

      {/* Who We Are */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A Zambian foundation built around the dignity of every child"
              description={org.intro}
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/about">
                  Learn about us <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/impact">View our impact</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "Founded", v: org.founded },
              { k: "Operations commenced", v: org.operationsCommenced },
              { k: "Where we work", v: org.operationalArea },
              { k: "How we work", v: "Through schools and directly within communities." },
            ].map((item) => (
              <div key={item.k} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <p className="text-eyebrow text-primary">{item.k}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="What We Do"
          title="Our program areas"
          description="Each program area reflects work the Foundation is actively delivering."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = programIcons[i % programIcons.length]!;

            return (
              <Link
                key={program.slug}
                to="/programs"
                hash={program.slug}
                className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-warm-gradient text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{program.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{program.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Explore program <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* Impact */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Impact"
            title="Measured, reported, accountable"
            description="Verified figures from Foundation programs, updated as our work grows."
          />
          <Button asChild variant="outline">
            <Link to="/impact">Full impact overview</Link>
          </Button>
        </div>
        <StatGrid className="mt-12" />
      </Section>

      {/* Projects */}
      <Section tone="sand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Our Work"
            title="In schools and in communities"
            description="Flagship school projects and community outreach delivered in Kitwe."
          />
          <Button asChild variant="outline">
            <Link to="/projects">All our work</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flagship.map((project) => (
            <FlagshipCard key={project.slug} project={project} />
          ))}
          {outreach.slice(0, 1).map((item) => (
            <OutreachCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      {/* Leadership preview */}
      <Section tone="sand">
        <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:items-center">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
            <img
              src={founder.photo}
              alt={founder.photoAlt}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          <div>
            <SectionHeading eyebrow="From Our Founder" title="A word from our leadership" />
            <blockquote className="mt-6 border-l-4 border-gold pl-5 font-display text-xl leading-snug font-semibold sm:text-2xl">
              “{founder.pullQuote}”
            </blockquote>
            <p className="mt-6 font-display text-lg font-bold">{founder.name}</p>
            <p className="text-sm text-muted-foreground">{founder.role}</p>
            <div className="mt-7">
              <Button asChild>
                <Link to="/about" hash="leadership">
                  Read Our Leadership Messages <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Stories */}
      <Section>
        <SectionHeading
          eyebrow="Stories of Hope"
          title="Real children. Real schools. Real change."
          description="Stories are published only with consent and with dignity."
          align="center"
        />
        {stories.length > 0 ? (
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>
        ) : (
          <PendingContent title="Stories coming soon" body={storiesPlaceholder} />
        )}
      </Section>

      {/* Partners */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Our Partners"
          title="Standing with organisations that believe in children"
          align="center"
          tone="ink"
        />
        {partners.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-foreground/10 sm:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-ink px-6 py-10 text-center">
                <p className="font-display text-sm font-semibold text-ink-foreground">{partner.name}</p>
                <p className="mt-1 text-xs text-ink-foreground/55">{partner.type}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-dashed border-ink-foreground/25 p-8 text-center text-sm leading-relaxed text-ink-foreground/75">
            {partnersPlaceholder}
          </div>
        )}
        <div className="mt-10 text-center">
          <Button asChild variant="gold">
            <Link to="/partners">Become a partner</Link>
          </Button>
        </div>
      </Section>

      {/* Get involved */}
      <Section>
        <SectionHeading
          eyebrow="Get Involved"
          title="Choose how you want to change a child's story"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {involvement.map((option) => (
            <div
              key={option.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <h3 className="font-display text-xl font-bold">{option.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>
              <Button asChild variant="outline" size="sm" className="mt-6 self-start">
                <Link to={option.to}>{option.action}</Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* News */}
      <Section tone="sand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Latest News & Updates"
            title="From the field"
            description="Foundation news, activities, events and project updates."
          />
          <Button asChild variant="outline">
            <Link to="/news">All news & stories</Link>
          </Button>
        </div>
        {news.length > 0 ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <PendingContent title="News coming soon" body={newsPlaceholder} />
        )}
      </Section>

      <CTABand />
    </>
  );
}
