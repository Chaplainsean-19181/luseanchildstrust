import { useState } from "react";
import { Play } from "lucide-react";

import type { FoundationVideo } from "@/content/site";

/**
 * Lightweight YouTube facade: shows the YouTube-hosted thumbnail until the
 * visitor chooses to play, then loads a privacy-enhanced (youtube-nocookie)
 * responsive player. Keeps initial page load fast and avoids autoplay.
 */
export function VideoCard({ video }: { video: FoundationVideo }) {
  const [active, setActive] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative aspect-video w-full bg-ink">
        {active ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            aria-label={video.title}
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play video: ${video.title}`}
            className="group absolute inset-0 size-full cursor-pointer"
          >
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              width={480}
              height={360}
              className="size-full object-cover opacity-85 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-300 group-hover:scale-110">
                <Play className="ml-1 size-7" aria-hidden="true" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-5">
        <p className="text-sm font-semibold leading-snug">{video.title}</p>
        {video.description ? (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}

export function VideoGallery({ items }: { items: FoundationVideo[] }) {
  if (items.length === 0) return null;
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
