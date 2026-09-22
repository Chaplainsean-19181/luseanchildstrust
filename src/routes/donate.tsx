import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Building2,
  Check,
  Copy,
  Globe2,
  HandHeart,
  Mail,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import {
  bankDetails,
  contactStatus,
  currencyNotice,
  donation,
  giftInAction,
  givingTiers,
  impactAreas,
  mobileMoney,
  photos,
} from "@/content/site";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Give hope and create change. Support learning materials, school essentials, feeding and school development for vulnerable children in Kitwe, Zambia via bank transfer or MTN Mobile Money.",
      },
      { property: "og:title", content: "Donate — Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "Give Hope. Create Change. Transform a Child's Future.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/donate" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: Donate,
});

const bankText = [
  `Account Name: ${bankDetails.accountName}`,
  `Bank: ${bankDetails.bank}`,
  `Account Number: ${bankDetails.accountNumber}`,
  `Branch: ${bankDetails.branch}`,
  `Branch Sort Code: ${bankDetails.sortCode}`,
  `SWIFT Code: ${bankDetails.swift}`,
].join("\n");

function Donate() {
  const [copied, setCopied] = useState(false);
  const [area, setArea] = useState("Where Most Needed");

  const copyBank = async () => {
    try {
      await navigator.clipboard.writeText(bankText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={donation.headline}
        description={donation.intro}
        image={photos.textbooks}
      />

      <Section>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="hero" size="lg">
            <a href="#bank-details">DONATE NOW</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#bank-details">VIEW BANK DETAILS</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#mobile-money">DONATE VIA MTN MOBILE MONEY</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#impact-areas">CHOOSE YOUR AREA OF IMPACT</a>
          </Button>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          No online payment gateway is connected to this website yet, so no payment is taken here.
          Giving is made directly through the verified bank transfer or MTN Mobile Money details
          below.
        </p>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Suggested giving levels"
          title="Choose a level that suits you"
          description="These are suggested giving levels only and do not guarantee a particular item or outcome."
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {givingTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            >
              <p className="text-eyebrow text-primary">{tier.name}</p>
              <p className="mt-2 font-display text-3xl font-bold">{tier.amount}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {tier.impact}
              </p>
              <Button asChild variant="hero" size="sm" className="mt-6 self-start">
                <a href="#bank-details">Give this amount</a>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Your Gift in Action"
          title="See what your support can help make possible"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {giftInAction.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <p className="font-display text-2xl font-bold text-primary">{item.kwacha}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.usd}</p>
              <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-muted-foreground">
          {currencyNotice}
        </p>
      </Section>

      <Section tone="sand" id="impact-areas">
        <SectionHeading
          eyebrow="Choose an area to support"
          title="Tell us where you would like to help"
          description="Select an area and mention it in your transfer reference or email so we understand your preference. If no area is selected, gifts are applied where most needed."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {impactAreas.map((a) => (
            <button
              key={a}
              type="button"
              aria-pressed={area === a}
              onClick={() => setArea(a)}
              className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                area === a
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {a}
            </button>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Selected area: <span className="font-semibold text-foreground">{area}</span>
        </p>
      </Section>

      <Section id="bank-details">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-lift sm:p-9">
            <div className="flex items-center gap-3">
              <Building2 className="size-5 text-primary" />
              <h2 className="font-display text-2xl font-bold">Bank donations — Zambia & international</h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This account receives local transfers, international transfers and USD transfers.
            </p>
            <dl className="mt-6 grid gap-3 text-sm">
              {[
                ["Account Name", bankDetails.accountName],
                ["Bank", bankDetails.bank],
                ["Account Number", bankDetails.accountNumber],
                ["Branch", bankDetails.branch],
                ["Branch Sort Code", bankDetails.sortCode],
                ["SWIFT Code", bankDetails.swift],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-wrap justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button type="button" variant="hero" onClick={copyBank}>
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Bank details copied" : "Copy bank details"}
              </Button>
            </div>
            <div className="mt-6 rounded-xl border border-border bg-muted/40 p-5">
              <p className="flex items-center gap-2 text-eyebrow text-primary">
                <Globe2 className="size-4" /> International donations
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                International donors should use SWIFT Code{" "}
                <span className="font-semibold text-foreground">{bankDetails.swift}</span>. If your
                bank requires further transfer information, please email{" "}
                <a href={`mailto:${contactStatus.email}`} className="font-semibold text-primary">
                  {contactStatus.email}
                </a>
                .
              </p>
            </div>
          </div>

          <div className="grid gap-8 content-start">
            <div id="mobile-money" className="rounded-2xl border border-border bg-card p-7 shadow-lift sm:p-9">
              <div className="flex items-center gap-3">
                <Smartphone className="size-5 text-primary" />
                <h2 className="font-display text-2xl font-bold">Donate via MTN Mobile Money</h2>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">For supporters in Zambia.</p>
              <dl className="mt-6 grid gap-3 text-sm">
                <div className="flex flex-wrap justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Account Name</dt>
                  <dd className="font-semibold">{mobileMoney.accountName}</dd>
                </div>
                <div className="flex flex-wrap justify-between gap-2 border-b border-border pb-2">
                  <dt className="text-muted-foreground">Mobile Money Number</dt>
                  <dd className="font-semibold">
                    <a href={`tel:${mobileMoney.number.replace(/\s/g, "")}`} className="hover:text-primary">
                      {mobileMoney.number}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-9">
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <h2 className="font-display text-xl font-bold">Donation enquiries</h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                For help with your gift, including international transfers, email{" "}
                <a href={`mailto:${contactStatus.email}`} className="font-semibold text-primary">
                  {contactStatus.email}
                </a>
                .
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <a href={`mailto:${contactStatus.email}`}>Email the Foundation</a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/partners">Partner with us instead</Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  Icon: ShieldCheck,
                  t: "Integrity and accountability",
                  d: "Giving is handled with transparency, responsible stewardship and Christian service.",
                },
                {
                  Icon: HandHeart,
                  t: "Practical humanitarian work",
                  d: "Gifts support education, school essentials, feeding, water and sanitation, and community development.",
                },
              ].map(({ Icon, t, d }) => (
                <div key={t} className="flex gap-4">
                  <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-foreground">{t}. </span>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
