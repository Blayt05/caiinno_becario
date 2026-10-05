"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { Event } from "@/models/Event";

const MAX_THUMBS = 4;

type Open = { event: Event; index: number } | null;

export default function EventsGrid({ events }: { events: Event[] }) {
  const [open, setOpen] = useState<Open>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpen((current) =>
        current && {
          ...current,
          index: (current.index + delta + current.event.images.length) % current.event.images.length,
        }
      ),
    []
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close, step]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {events.map((event) => {
          const [cover, ...rest] = event.images;
          const thumbs = rest.slice(0, MAX_THUMBS);
          const extra = rest.length - thumbs.length;

          return (
            <article
              key={event.id}
              className="flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => setOpen({ event, index: 0 })}
                className="group relative aspect-[16/9] w-full overflow-hidden bg-gray-100"
                aria-label={`Ver galería: ${event.title}`}
              >
                <Image
                  src={cover.url}
                  alt={cover.alt || event.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                  <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-gray-900 opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
                    <Images className="h-4 w-4" />
                    Ver galería
                  </span>
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base md:text-lg font-semibold leading-snug text-gray-900">{event.title.trim()}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </p>

                {thumbs.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {thumbs.map((image, i) => (
                      <button
                        key={image.url}
                        type="button"
                        onClick={() => setOpen({ event, index: i + 1 })}
                        className="relative h-14 w-14 overflow-hidden rounded-md shadow-sm transition-transform duration-200 hover:scale-105"
                        aria-label={`Ver imagen ${i + 2} de ${event.images.length}`}
                      >
                        <Image src={image.url} alt={image.alt || event.title} fill sizes="56px" className="object-cover" />
                      </button>
                    ))}
                    {extra > 0 && (
                      <button
                        type="button"
                        onClick={() => setOpen({ event, index: MAX_THUMBS + 1 })}
                        className="flex h-14 w-14 items-center justify-center rounded-md bg-gray-600 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                        aria-label={`Ver ${extra} imágenes más`}
                      >
                        +{extra}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.event.title}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex items-start justify-between gap-4 p-4 text-white">
            <p className="text-sm md:text-base font-medium">{open.event.title.trim()}</p>
            <button type="button" onClick={close} aria-label="Cerrar" className="rounded-full p-2 hover:bg-white/10">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="relative flex-1" onClick={(e) => e.stopPropagation()}>
            <Image
              src={open.event.images[open.index].url}
              alt={open.event.images[open.index].alt || open.event.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {open.event.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Imagen anterior"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-white/30"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Imagen siguiente"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-white/30"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          <p className="p-4 text-center text-sm text-white/80">
            {open.index + 1} / {open.event.images.length}
          </p>
        </div>
      )}
    </>
  );
}
