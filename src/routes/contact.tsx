import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Facebook, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { contactStatus, org, registration, photos } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Reach the Lusean Child's Trust Foundation team in Kitwe, Copperbelt Province, Zambia about donations, partnerships, sponsorship, volunteering or media enquiries.",
      },
      { property: "og:title", content: "Contact Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "Talk to us about donating, partnering, sponsoring a project or volunteering.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const subjects = [
  "Donation enquiry",
  "Partnership",
  "Sponsor a project",
  "Volunteering",
  "Media enquiry",
  "Other",
];

const tel = (n: string) => n.replace(/\s/g, "");
const wa = (n: string) => n.replace(/[^0-9]/g, "");

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about changing a child's story"
        description="Donors, partners, volunteers, schools, media and communities — we would love to hear from you."
        image={photos.schoolEngagement}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Reach us" title="Foundation contact details" />
            <ul className="mt-8 grid gap-5">
              <li className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  {contactStatus.address}
                  <span className="block text-sm text-muted-foreground">
                    {org.operationalArea}
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-primary" />
                <a href={`mailto:${contactStatus.email}`} className="break-all hover:text-primary">
                  {contactStatus.email}
                </a>
              </li>
              {contactStatus.phones.map((p) => (
                <li key={p.number} className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-primary" />
                  <span>
                    <a href={`tel:${tel(p.number)}`} className="hover:text-primary">
                      {p.number}
                    </a>
                    <span className="block text-sm text-muted-foreground">{p.label}</span>
                  </span>
                </li>
              ))}
              <li className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-primary" />
                <span>
                  Office hours
                  <span className="block text-sm text-muted-foreground">
                    {contactStatus.officeHours}
                  </span>
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero">
                <a href={`mailto:${contactStatus.email}`}>Email us</a>
              </Button>
              {contactStatus.phones
                .filter((p) => p.whatsapp)
                .map((p) => (
                  <Button asChild key={p.number} variant="outline">
                    <a
                      href={`https://wa.me/${wa(p.number)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-4" />
                      WhatsApp us
                    </a>
                  </Button>
                ))}
            </div>

            <div className="mt-8">
              <p className="text-eyebrow text-primary">Follow us</p>
              <div className="mt-3 flex gap-3">
                {contactStatus.socials.map((s) => {
                  const Icon = s.label === "YouTube" ? Youtube : Facebook;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${org.name} on ${s.label}`}
                      className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Icon className="size-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {!registration.verified ? (
              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                {registration.placeholder}
              </p>
            ) : null}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-9"
            aria-describedby="contact-form-status"
          >
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>

            <p
              id="contact-form-status"
              className="mt-4 rounded-xl border border-dashed border-border bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground"
            >
              This enquiry form is not yet connected to a live inbox, so messages cannot be
              delivered from here. Please email{" "}
              <a href={`mailto:${contactStatus.email}`} className="font-semibold text-primary">
                {contactStatus.email}
              </a>{" "}
              or call / WhatsApp us on the numbers listed and we will respond. See our{" "}
              <Link to="/privacy" className="font-semibold text-primary underline underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>

            <fieldset disabled className="contents">
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="contact-name">Full name</Label>
                  <Input id="contact-name" name="name" maxLength={100} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" name="email" type="email" maxLength={255} />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="contact-org">Organisation (optional)</Label>
                  <Input id="contact-org" name="organisation" maxLength={120} />
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="contact-subject">Subject</Label>
                  <select
                    id="contact-subject"
                    name="subject"
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2 sm:col-span-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea id="contact-message" name="message" rows={6} maxLength={1500} />
                </div>
              </div>
              <Button type="submit" variant="hero" size="lg" className="mt-7">
                Send message
              </Button>
            </fieldset>
          </form>
        </div>
      </Section>
    </>
  );
}
