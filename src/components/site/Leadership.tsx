import { cn } from "@/lib/utils";
import { org, type LeadershipMessage } from "@/content/site";

/**
 * Full leadership message: elegant portrait framing + verified message text.
 * Photographs are the official uploaded portraits — never regenerate or distort.
 */
export function LeadershipMessageBlock({
  message,
  reverse = false,
}: {
  message: LeadershipMessage;
  reverse?: boolean;
}) {
  return (
    <article className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
      <div className={cn("lg:sticky lg:top-28 lg:self-start", reverse && "lg:order-2")}>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-sand shadow-lift">
          <img
            src={message.photo}
            alt={message.photoAlt}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover object-top"
          />
        </div>
        <div className="mt-5">
          <p className="text-eyebrow text-primary">{message.eyebrow}</p>
          <h3 className="mt-2 font-display text-2xl font-bold">{message.name}</h3>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">{message.role}</p>
        </div>
      </div>

      <div className={cn(reverse && "lg:order-1")}>
        <blockquote className="border-l-4 border-gold pl-5 font-display text-xl leading-snug font-semibold sm:text-2xl">
          “{message.pullQuote}”
        </blockquote>
        <div className="mt-7 space-y-4 leading-relaxed text-muted-foreground">
          {message.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <footer className="mt-8 border-t border-border pt-5">
          <p className="font-display text-lg font-bold">{message.name}</p>
          <p className="text-sm text-muted-foreground">{message.role}</p>
          <p className="text-sm text-muted-foreground">{org.name}</p>
          <p className="mt-3 text-eyebrow text-primary">{org.tagline}</p>
        </footer>
      </div>
    </article>
  );
}
