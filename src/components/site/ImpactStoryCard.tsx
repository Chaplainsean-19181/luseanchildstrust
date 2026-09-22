import { Link } from "@tanstack/react-router";

import type { ImpactStory } from "@/content/site";
import { Button } from "@/components/ui/button";

export function ImpactStoryCard({ story }: { story: ImpactStory }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {story.image ? (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={story.image}
            alt={story.imageAlt ?? story.title}
            loading="lazy"
            width={1200}
            height={750}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-xs">
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
        <h3 className="mt-3 text-lg font-semibold leading-snug">{story.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{story.summary}</p>
        <div className="mt-5 pt-1">
          <Button asChild variant="outline" size="sm">
            <Link to="/news/$slug" params={{ slug: story.slug }}>
              READ STORY
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
