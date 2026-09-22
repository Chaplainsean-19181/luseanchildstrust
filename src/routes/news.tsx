import { useState } from "react";
import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { CTABand, PageHero, Section, SectionHeading } from "@/components/site/Layout";
import { NewsCard, PendingContent } from "@/components/site/Cards";
import { ImpactStoryCard } from "@/components/site/ImpactStoryCard";
import { VideoGallery } from "@/components/site/VideoGallery";
import {
  impactStories,
  news,
  newsPlaceholder,
  photos,
  storiesIntro,
  storyCategories,
  videoSection,
  videos,
  youtubeChannel,
} from "@/content/site";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Stories — Lusean Child's Trust Foundation" },
      {
        name: "description",
        content:
          "Stories of change and impact from Lusean Child's Trust Foundation: education support, school essentials, feeding, water and sanitation, community outreach and faith in action.",
      },
      { property: "og:title", content: "News & Stories — Lusean Child's Trust Foundation" },
      {
        property: "og:description",
        content: "Real work. Real communities. Real impact — plus Lusean in Action videos.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/news" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsLayout,
});

function NewsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/news/$slug");
  if (isChild) return <Outlet />;
  return <News />;
}

function News() {
  const [category, setCategory] = useState<string>("All");

  const visibleStories =
    category === "All" ? impactStories : impactStories.filter((s) => s.category === category);

  const filters = [
    "All",
    ...storyCategories.filter((c) => impactStories.some((s) => s.category === c)),
  ];

  return (
    <>
      <PageHero
        eyebrow={storiesIntro.eyebrow}
        title={storiesIntro.title}
        description={storiesIntro.body[0] ?? ""}
        image={photos.textbooks}
      />

      <Section>
        <div className="max-w-3xl">
          {storiesIntro.body.slice(1).map((paragraph) => (
            <p key={paragraph} className="mt-4 text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter stories by category">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={category === item}
              className={
                category === item
                  ? "rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                  : "rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              }
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleStories.map((story) => (
            <ImpactStoryCard key={story.slug} story={story} />
          ))}
        </div>
      </Section>

      <Section tone="ink" id="lusean-in-action">
        <SectionHeading
          eyebrow={videoSection.eyebrow}
          title={videoSection.title}
          description={videoSection.description}
          tone="ink"
          align="center"
        />
        <VideoGallery items={videos} />
        {youtubeChannel ? (
          <div className="mt-10 text-center">
            <Button asChild variant="onDark" size="lg">
              <a href={youtubeChannel} target="_blank" rel="noopener noreferrer">
                {videoSection.channelLabel}
              </a>
            </Button>
          </div>
        ) : null}
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Latest News" title="Foundation updates" />
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

      <Section>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/donate">SUPPORT OUR WORK</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/partners">PARTNER WITH US</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/projects">SEE OUR PROJECTS</Link>
          </Button>
        </div>
      </Section>

      <CTABand />
    </>
  );
}
