"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export type CatPhoto = { src: string; date: string; caption: string };

export default function CatGallery({ photos }: { photos: CatPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    // Drop focus so the clicked thumbnail doesn't keep a focus outline
    (document.activeElement as HTMLElement | null)?.blur();
  }, []);
  const step = useCallback(
    (delta: number) =>
      setOpen((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    [photos.length]
  );

  // Keyboard controls + lock page scroll while the viewer is open
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, step]);

  const photo = open === null ? null : photos[open];

  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
        {photos.map((p, i) => (
          <button
            key={p.src}
            onClick={() => setOpen(i)}
            aria-label={`Open photo: ${p.caption}`}
            className="group relative aspect-square rounded-md overflow-hidden bg-foreground/5 cursor-pointer outline-none">
            <Image
              src={p.src}
              alt={`Winston - ${p.caption}`}
              fill
              className="object-cover transition duration-300 ease-out group-hover:scale-[1.04]"
              sizes="(max-width: 640px) 33vw, 180px"
            />
            {/* Caption on hover */}
            <span className="absolute inset-x-0 bottom-0 px-2 pb-1.5 pt-6 text-left text-[11px] sm:text-xs text-white/90 bg-gradient-to-t from-black/60 to-transparent opacity-0 translate-y-1 transition duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0">
              {p.caption.toLowerCase()}
            </span>
          </button>
        ))}
      </div>

      {photo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center p-5 sm:p-10 bg-background/95 backdrop-blur-sm animate-[fade-in_200ms_ease-out]">
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center max-w-full">
            <div className="relative">
              <Image
                key={photo.src}
                src={photo.src}
                alt={`Winston - ${photo.caption}`}
                width={1200}
                height={1200}
                className="w-auto h-auto max-w-[min(90vw,720px)] max-h-[75vh] rounded-lg object-contain animate-[fade-in_250ms_ease-out]"
                sizes="(max-width: 640px) 90vw, 720px"
                priority
              />
            </div>
            <figcaption className="mt-3 w-full flex items-center justify-between gap-6 text-[13px]">
              <button
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="text-foreground/50 hover:text-[var(--accent)] transition-colors cursor-pointer outline-none">
                ←
              </button>
              <span className="text-center">
                <span className="text-foreground/70">
                  {photo.caption.toLowerCase()}
                </span>
                <span className="ml-2 text-xs text-foreground/40">
                  {photo.date.toLowerCase()}
                </span>
              </span>
              <button
                onClick={() => step(1)}
                aria-label="Next photo"
                className="text-foreground/50 hover:text-[var(--accent)] transition-colors cursor-pointer outline-none">
                →
              </button>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
