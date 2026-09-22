import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  HeartHandshake,
  Handshake,
  Users,
  FolderHeart,
  Share2,
  Check,
  Copy,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { VolunteerForm } from "@/components/site/VolunteerForm";
import {
  churchesSection,
  contactStatus,
  corporateSection,
  getInvolvedActions,
  getInvolvedClosing,
  getInvolvedIntro,
  givingTiers,
  org,
  partnerWithPurpose,
  partnershipAreas,
  photos,
  responsibleEngagement,
  supportFromAnywhere,
  volunteerSection,
  waysToMakeADifference,
  type ActionLink,
} from "@/content/site";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Donate, partner, volunteer or support a verified project with Lusean Child's Trust Foundation in Kitwe, Zambia. Be part of changing and giving hope to a child.",
      },
      { property: "og:title", content: "Get Involved — Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "Give, partner, volunteer or support a project — choose how you create change.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/get-involved" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolved,
});

const wayIcons = [HeartHandshake, Handshake, Users, FolderHeart, Share2];

function ActionButton({
  action,
  variant = "hero",
  size = "lg",
}: {
  action: ActionLink;
  variant?: "hero" | "outline" | "gold" | "onDark" | "default";
  size?: "lg" | "sm" | "default";
}) {
  return (
    <Button asChild variant={variant} size={size}>
      {action.href ? (
        <a href={action.href}>{action.label}</a>
      ) : (
        <Link to={action.to ?? "/get-involved"} {...(action.hash ? { hash: action.hash } : {})}>
          {action.label}
        </Link>
      )}
    </Button>
  );
}

function GetInvolved() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title={getInvolvedIntro.primaryMessage}
        description={getInvolvedIntro.body[0]!}
        image={photos.wusakileOutreach}
      />

      <Section>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-primary">{org.coreMessage}</p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {getInvolvedIntro.body[1]}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {getInvolvedActions.map((action, i) => (
            <ActionButton
              key={action.label}
              action={action}
              variant={i === 0 ? "hero" : "outline"}
            />
          ))}
        </div>
      </Section>

      {/* Ways to make a difference */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Take action"
          title="Ways to Make a Difference"
          description="Choose the pathway that fits your capacity, your organisation or your calling."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {waysToMakeADifference.map((way, i) => {
            const Icon = wayIcons[i % wayIcons.length]!;

            return (
              <div
                key={way.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-warm-gradient text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold">{way.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {way.description}
                </p>
                <div className="mt-6">
                  <ActionButton action={way.action} variant="outline" size="sm" />
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Volunteer */}
      <Section id="volunteer">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Volunteer"
              title={volunteerSection.title}
              description={volunteerSection.subtitle}
            />
            <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">
              Appropriate volunteer involvement may support areas such as
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {volunteerSection.areas.map((area) => (
                <li key={area} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-dashed border-border bg-sand/60 p-6 text-sm leading-relaxed text-muted-foreground">
              {volunteerSection.notice}
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
            <img
              src={photos.schoolEngagement}
              alt="Lusean Child's Trust Foundation representatives engaging with pupils at a supported school in Kitwe"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="p-7">
              <h3 className="font-display text-xl font-bold">Serving with the Foundation</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Volunteers work alongside our team in schools and communities across Kitwe,
                Copperbelt Province, and support the Foundation remotely through professional
                skills, communications and project support.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Volunteer interest form */}
      <Section tone="sand" id="volunteer-form">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Express interest"
            title="Volunteer Interest Form"
            description="Tell us a little about yourself and how you would like to serve. Our team reviews every enquiry against current organizational needs."
            align="center"
          />
          <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <VolunteerForm />
          </div>
        </div>
      </Section>

      {/* Partner with purpose */}
      <Section id="partner">
        <SectionHeading
          eyebrow="Partnership"
          title={partnerWithPurpose.title}
          description={partnerWithPurpose.subtitle}
          align="center"
        />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-muted-foreground">
          {partnerWithPurpose.intro}
        </p>
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {partnerWithPurpose.collaborators.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnershipAreas.map((area) => (
            <div key={area.t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="font-display text-lg font-bold">{area.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{area.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild variant="hero" size="lg">
            <a href={`mailto:${contactStatus.email}`}>BECOME A PARTNER</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/partners">See our partners page</Link>
          </Button>
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Partnership enquiries:{" "}
          <a
            href={`mailto:${contactStatus.email}`}
            className="font-semibold text-primary underline underline-offset-4"
          >
            {contactStatus.email}
          </a>
        </p>
      </Section>

      {/* Churches */}
      <Section tone="ink">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Churches & faith communities"
              title={churchesSection.title}
              description={churchesSection.intro}
              tone="ink"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <a href={`mailto:${contactStatus.email}`}>{churchesSection.cta}</a>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/contact">Contact page</Link>
              </Button>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {churchesSection.areas.map((area) => (
              <li
                key={area}
                className="rounded-xl border border-ink-foreground/15 bg-ink-foreground/5 px-5 py-4 text-sm text-ink-foreground/85"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Corporate & CSR */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Business & CSR"
              title={corporateSection.title}
              description={corporateSection.intro}
            />
            <div className="mt-7 flex flex-wrap gap-2.5">
              {corporateSection.areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-sand px-4 py-2 text-sm font-medium text-sand-foreground"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="hero" size="lg">
                <a href={`mailto:${contactStatus.email}`}>{corporateSection.cta}</a>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lift">
            <img
              src={photos.textbooks}
              alt="Textbooks provided by Lusean Child's Trust Foundation for pupils at a supported school in Kitwe"
              loading="lazy"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Support from anywhere */}
      <Section tone="sand">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="International supporters"
            title={supportFromAnywhere.title}
            description={supportFromAnywhere.intro}
          />
          <div>
            <ul className="grid gap-3">
              {supportFromAnywhere.ways.map((way) => (
                <li key={way} className="flex gap-3 text-muted-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  {way}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero">
                <Link to="/donate">Give from abroad</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${contactStatus.email}`}>International enquiries</a>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Suggested giving levels (existing verified tiers) */}
      <Section>
        <SectionHeading
          eyebrow="Suggested giving levels"
          title="Where contributions go"
          description="These are suggested giving levels only and do not guarantee a particular item or outcome."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {givingTiers.map((tier) => (
            <div key={tier.name} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <p className="text-eyebrow text-primary">{tier.name}</p>
              <p className="mt-2 font-display text-3xl font-bold">{tier.amount}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.impact}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/donate">See how to give</Link>
          </Button>
        </div>
      </Section>

      {/* Share our mission */}
      <ShareSection />

      {/* Responsible engagement */}
      <Section tone="sand">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center shadow-soft">
          <h2 className="font-display text-2xl font-bold">{responsibleEngagement.title}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{responsibleEngagement.body}</p>
        </div>
      </Section>

      {/* Closing CTA */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{getInvolvedClosing.title}</h2>
          <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-ink-foreground/80">
            {getInvolvedClosing.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink-foreground/85 sm:text-lg">
            {getInvolvedClosing.body}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {getInvolvedClosing.actions.map((action, i) => (
              <ActionButton
                key={action.label}
                action={action}
                variant={i === 0 ? "gold" : "onDark"}
              />
            ))}
          </div>
        </div>
        <div className="kente-rule" />
      </section>

    </>
  );
}

function ShareSection() {
  const [copied, setCopied] = useState(false);
  const shareText = `${org.name} — ${org.tagline}`;
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Section id="share">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Share our mission"
          title="Help more people hear about this work"
          description="Sharing costs nothing and helps vulnerable children in Kitwe reach supporters who can help."
          align="center"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on Facebook
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href={`mailto:?subject=${encodeURIComponent(org.name)}&body=${encodeURIComponent(
                `${shareText}\n\n${shareUrl}`,
              )}`}
            >
              Share by email
            </a>
          </Button>
          <Button variant="hero" onClick={copyLink} type="button">
            {copied ? <Check /> : <Copy />}
            {copied ? "Link copied" : "Copy link"}
          </Button>
        </div>
      </div>
    </Section>
  );
}
