import { createFileRoute } from "@tanstack/react-router";

import { Section } from "@/components/site/Layout";
import { contactStatus, org, privacyPolicy } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "How Lusean Child's Trust Foundation handles information shared through its website, enquiry and volunteer interest forms, and its commitment to child-conscious, responsible data handling.",
      },
      { property: "og:title", content: "Privacy Policy — Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content:
          "Our commitment to handling information responsibly, respectfully and only for legitimate organizational purposes.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <p className="text-eyebrow text-primary">{org.name}</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">{privacyPolicy.title}</h1>
        <h2 className="mt-8 text-xl font-bold">Our Commitment to Privacy</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{privacyPolicy.intro}</p>

        {privacyPolicy.sections.map((section) => (
          <div key={section.heading} className="mt-10">
            <h2 className="text-xl font-bold">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            {section.list ? (
              <ul className="mt-4 grid list-disc gap-1.5 pl-5 text-muted-foreground">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {section.footnote ? (
              <p className="mt-4 leading-relaxed text-muted-foreground">{section.footnote}</p>
            ) : null}
          </div>
        ))}

        <div className="mt-12 rounded-2xl border bg-sand p-6 text-sand-foreground sm:p-8">
          <h2 className="text-xl font-bold">Contact Us Regarding Privacy</h2>
          <ul className="mt-4 grid gap-2 text-sm leading-relaxed">
            <li>{org.name}</li>
            <li>{contactStatus.address}</li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${contactStatus.email}`}
                className="font-semibold underline underline-offset-4"
              >
                {contactStatus.email}
              </a>
            </li>
            {contactStatus.phones.map((p) => (
              <li key={p.number}>
                {p.whatsapp ? "Mobile / WhatsApp" : "Additional Mobile"}:{" "}
                <a
                  href={`tel:${p.number.replace(/\s/g, "")}`}
                  className="font-semibold underline underline-offset-4"
                >
                  {p.number}
                </a>
              </li>
            ))}
            <li>Office Hours: {contactStatus.officeHours}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
