import { Link } from "@tanstack/react-router";
import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactStatus, nav, org } from "@/content/site";
import logoAsset from "@/assets/lusean-logo.jpg.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-ink-foreground">
      <div className="kente-rule" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white p-2">
              <img
                src={logoAsset.url}
                alt="Lusean Child's Foundation logo"
                loading="lazy"
                width={1920}
                height={1920}
                className="h-20 w-20 object-contain sm:h-24 sm:w-24"
              />
            </div>
            <span className="font-display text-lg font-bold">{org.name}</span>
          </div>
          <p className="mt-3 text-sm text-ink-foreground/75">{org.tagline}</p>
          <p className="mt-2 text-sm text-ink-foreground/60">
            Faith-based (Christian) humanitarian organization
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-foreground/75">
            {org.intro}
          </p>
          <p className="mt-5 text-eyebrow text-gold">{org.coreMessage}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="sm">
              <Link to="/donate">Donate</Link>
            </Button>
            <Button asChild variant="onDark" size="sm">
              <Link to="/partners">Partner With Us</Link>
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-eyebrow text-ink-foreground/60">Explore</h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-ink-foreground/80 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-eyebrow text-ink-foreground/60">Contact</h2>
          <ul className="mt-4 grid gap-3 text-sm text-ink-foreground/80">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                {contactStatus.address}
                <span className="block text-ink-foreground/60">{org.operationalArea}</span>
              </span>
            </li>
            {contactStatus.email ? (
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`mailto:${contactStatus.email}`} className="hover:text-gold">
                  {contactStatus.email}
                </a>
              </li>
            ) : null}
            {contactStatus.phones.map((p) => (
              <li key={p.number} className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                <a href={`tel:${p.number.replace(/\s/g, "")}`} className="hover:text-gold">
                  {p.number}
                  {p.whatsapp ? (
                    <span className="ml-2 text-xs text-ink-foreground/60">WhatsApp</span>
                  ) : null}
                </a>
              </li>
            ))}
          </ul>
          {contactStatus.socials.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {contactStatus.socials.map((s) => {
                const Icon = s.label === "YouTube" ? Youtube : Facebook;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${org.name} on ${s.label}`}
                    className="flex size-10 items-center justify-center rounded-full border border-ink-foreground/20 text-ink-foreground/80 transition-colors hover:border-gold hover:text-gold"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>

      </div>

      <div className="border-t border-ink-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {org.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link to="/privacy" className="transition-colors hover:text-gold">
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="hidden sm:inline">
              ·
            </span>
            <p>{org.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
