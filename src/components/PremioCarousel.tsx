"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Event } from "@/models/Event";

export default function PremioCarousel({ premio }: { premio: Event }) {
  const multiple = premio.images.length > 1;
  const autoplay = useRef<AutoplayType | null>(null);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  if (multiple && !autoplay.current) {
    autoplay.current = Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true });
  }

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <article className="space-y-4">
      <h2 className="mx-auto max-w-4xl text-center text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-gray-900">
        {premio.title.trim()}
      </h2>

      <div className="relative overflow-hidden rounded-xl bg-gray-100 shadow-lg">
        <Carousel
          setApi={setApi}
          plugins={autoplay.current ? [autoplay.current] : []}
          opts={{ loop: multiple }}
        >
          <CarouselContent className="ml-0">
            {premio.images.map((image, index) => (
              <CarouselItem key={image.url} className="pl-0">
                <div className="relative h-[300px] sm:h-[450px] md:h-[600px] w-full">
                  <Image
                    src={image.url}
                    alt={image.alt || premio.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {multiple && (
            <>
              <CarouselPrevious className="left-3 z-10 bg-white/90" />
              <CarouselNext className="right-3 z-10 bg-white/90" />
            </>
          )}
        </Carousel>

        {multiple && (
          <>
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
              <span className="rounded-full bg-black/60 px-3 py-0.5 text-xs text-white">
                {current + 1} / {premio.images.length}
              </span>
              <div className="flex gap-1.5">
                {premio.images.map((image, index) => (
                  <button
                    key={image.url}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Ir a la imagen ${index + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      index === current ? "w-5 bg-gray-800" : "w-2 bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-black/10">
              <div
                className="h-full rounded-full bg-gray-900 transition-all duration-500"
                style={{ width: `${((current + 1) / premio.images.length) * 100}%` }}
              />
            </div>
          </>
        )}
      </div>
    </article>
  );
}
