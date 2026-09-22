import { cn } from "@/lib/utils";
import { stats, type Stat } from "@/content/site";

export function StatGrid({
  items = stats,
  tone = "ink",
  className,
}: {
  items?: Stat[];
  tone?: "ink" | "default";
  className?: string;
}) {
  return (
    <div className={cn("grid gap-px overflow-hidden rounded-2xl bg-border/60 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "p-8 transition-colors",
            tone === "ink" ? "bg-ink text-ink-foreground" : "bg-card text-card-foreground",
          )}
        >
          <p className="font-display text-4xl font-bold text-gold sm:text-5xl">{stat.value}</p>
          <p className="mt-2 font-semibold">{stat.label}</p>
          {stat.note ? (
            <p
              className={cn(
                "mt-1 text-sm",
                tone === "ink" ? "text-ink-foreground/65" : "text-muted-foreground",
              )}
            >
              {stat.note}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
