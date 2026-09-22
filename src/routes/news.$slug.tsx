import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { CTABand, Section } from "@/components/site/Layout";
import { Button } from "@/components/ui/button";
import { impactStories } from "@/content/site";

function getStory(slug: string) {
  return impactStories.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params }) => {
    const story = getStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ params }) => {
    const story = getStory(params.slug);
    const title = story
      ? `${story.title} — Lusean Child's Trust Foundation`
      : "Story — Lusean Child's Trust Foundation";
    const description =
      story?.summary ??
      "An authentic story of work undertaken by Lusean Child's Trust Foundation in Kitwe, Zambia.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/news/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/news/${params.slug}` }],
    };
  },
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();

  return (
    <>
      <article>
        <Section className="pb-10">
          <div className="mx-auto max-w-3xl">
            <Link to="/news" className="text-eyebrow text-primary hover:underline">
              ← News &amp; Stories
            </Link>
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">
                {story.category}
              </span>
              {story.date ? (
                <time className="text-muted-foreground" dateTime={story.date}>
                  {new Date(story.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              ) : null}
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{story.title}</h1>
            {story.classification ? (
              <p className="mt-3 text-sm font-semibold text-primary">{story.classification}</p>
            ) : null}
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{story.summary}</p>
          </div>

          {story.image ? (
            <figure className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border shadow-soft">
              <img
                src={story.image}
                alt={story.imageAlt ?? story.title}
                width={1600}
                height={1000}
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          ) : null}

          <div className="mx-auto mt-10 max-w-3xl">
            {story.body.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {story.support && story.support.length > 0 ? (
              <div className="mt-10 rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h2 className="text-eyebrow text-primary">Verified support</h2>
                <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                  {story.support.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {story.themes && story.themes.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-2">
                {story.themes.map((theme) => (
                  <li
                    key={theme}
                    className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground"
                  >
                    {theme}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/donate">SUPPORT OUR WORK</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">SEE OUR PROJECTS</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/news" hash="lusean-in-action">
                  WATCH LUSEAN IN ACTION
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </article>

      <CTABand />
    </>
  );
}
