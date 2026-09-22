import { cn } from "@/lib/utils";
import type { NewsItem, Outreach, SchoolProject, Story } from "@/content/site";
import { photography } from "@/content/site";

export function ImageNotice({ className }: { className?: string }) {
  if (!photography.usingPlaceholders) return null;
  return (
    <p className={cn("mt-2 text-[11px] italic text-muted-foreground", className)}>
      {photography.shortLabel} — awaiting authentic Foundation photograph.
    </p>
  );
}

function SupportList({ items, tone = "default" }: { items: string[]; tone?: "default" | "ink" }) {
  return (
    <ul className="mt-4 grid gap-2 text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
          <span className={tone === "ink" ? "text-ink-foreground/80" : "text-muted-foreground"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function FlagshipCard({ project }: { project: SchoolProject }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={`Photograph of Lusean Child's Trust Foundation support delivered at ${project.name}`}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover"
        />
      </div>
      <div className="p-7">
        <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
          Flagship project
        </span>
        <h3 className="mt-4 text-xl font-semibold">{project.name}</h3>
        {project.note ? (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.note}</p>
        ) : null}
        <p className="mt-4 text-eyebrow text-primary">Support provided</p>
        <SupportList items={project.support} />
        <ImageNotice />
      </div>
    </article>
  );
}

export function SchoolCard({ project }: { project: SchoolProject }) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="mt-3 text-eyebrow text-primary">Support provided</p>
      <SupportList items={project.support} />
    </article>
  );
}

export function OutreachCard({ item }: { item: Outreach }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={item.image}
          alt={`Photograph from the ${item.title}`}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover"
        />
      </div>
      <div className="p-7">
        <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-accent-foreground">
          Community outreach
        </span>
        <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        <p className="mt-4 text-eyebrow text-primary">Support provided</p>
        <SupportList items={item.support} />
        <ImageNotice />
      </div>
    </article>
  );
}

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{story.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{story.excerpt}</p>
        {story.quote ? (
          <blockquote className="mt-5 border-l-2 border-primary pl-4 text-sm italic text-foreground">
            "{story.quote}"
            {story.attribution ? (
              <footer className="mt-1 text-xs not-italic text-muted-foreground">
                — {story.attribution}
              </footer>
            ) : null}
          </blockquote>
        ) : null}
      </div>
    </article>
  );
}

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-accent px-3 py-1 font-semibold text-accent-foreground">
            {item.category}
          </span>
          <time dateTime={item.date}>
            {new Date(item.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
        </div>
        <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
      </div>
    </article>
  );
}

export function PendingContent({ title, body }: { title: string; body: string }) {
  return (
    <div className="mt-10 rounded-2xl border border-dashed border-border bg-card/60 p-8 text-center">
      <p className="font-display text-lg font-bold">{title}</p>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
