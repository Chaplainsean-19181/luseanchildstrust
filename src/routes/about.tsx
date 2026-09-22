import { createFileRoute } from "@tanstack/react-router";

import { CTABand, PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { leadership, org, values, photos } from "@/content/site";
import { LeadershipMessageBlock } from "@/components/site/Leadership";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Who we are, what we believe and how Lusean Child's Trust Foundation works with schools and communities in Kitwe, Copperbelt Province, Zambia."
      },
      { property: "og:title", content: "About Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "Our mission, vision, values and community-led approach to child development.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Hope, built with schools and communities in Kitwe"
        description={org.intro}
        image={photos.schoolEngagement}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <img
            src={photos.textbooks}
            alt="Learners in school uniform holding up new textbooks provided by the Foundation"
            loading="lazy"
            width={1200}
            height={900}
            className="w-full rounded-2xl object-cover shadow-lift"
          />
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Founded on a simple conviction"
              description="No child should lose their future to circumstances they did not choose."
            />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Lusean Child's Trust Foundation was founded in 2018 and commenced operations in
                June 2023. We work in Kitwe, Copperbelt Province, Zambia, responding to the
                practical barriers that keep children out of school — missing learning materials,
                no uniform or shoes, hunger, and schools without adequate water and sanitation.
              </p>
              <p>
                We deliver support in two ways: through partnerships with schools, and directly
                within communities where we gather beneficiary information and organise outreach.
                Our guiding focus never changes — to create Change, add Value and activate Hope in
                the life of a marginalized child.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
          <p className="text-eyebrow text-primary">Our Identity</p>
          <p className="mt-4 text-lg leading-relaxed">{org.faithIdentity}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {org.faithValues.map((value) => (
              <li
                key={value}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold"
              >
                {value}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Our Christian faith inspires our commitment to serve vulnerable and marginalized
            children and communities — and we welcome supporters, partners and institutions of
            every background who share that commitment.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="text-eyebrow text-primary">Our Mission</p>
            <p className="mt-4 text-lg leading-relaxed">
              To improve access to education, school essentials, basic needs, safe learning
              environments and community support that enable vulnerable and marginalized children to
              reach their full potential.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="text-eyebrow text-primary">Our Vision</p>
            <p className="mt-4 text-lg leading-relaxed">
              A society where every child — regardless of background — grows up safe, educated,
              supported and confident in their future.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <SectionHeading eyebrow="Our Values" title="What we hold ourselves to" align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="font-display text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="leadership">
        <SectionHeading
          eyebrow="Leadership"
          title="Messages From Our Leadership"
          description="Reflections from the leadership of Lusean Child's Trust Foundation on our faith, our purpose and the children we serve."
          align="center"
        />
        <div className="mt-14 space-y-20">
          {leadership.map((message, i) => (
            <LeadershipMessageBlock key={message.slug} message={message} reverse={i % 2 === 1} />
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          eyebrow="Governance & Accountability"
          title="Trusted by donors, partners and communities"
          description="We operate with clear governance, documented programs, financial oversight and transparent reporting to every donor and partner."
          align="center"
          tone="ink"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { t: "Transparent reporting", d: "Support delivered is recorded school by school and reported to funders and sponsors." },
            { t: "Child safeguarding", d: "A safeguarding policy governs every interaction with children and their images." },
            { t: "Community ownership", d: "We work with schools and communities to identify needs and deliver support together." },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-ink-foreground/15 p-7">
              <h3 className="font-display text-lg font-bold text-gold">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/75">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTABand />
    </>
  );
}
