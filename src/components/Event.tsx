"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import { useRef } from "react";
import { Event } from "@/models/Event";

interface EventProps {
  item: Event;
}

export default function EventCarousel({ item }: EventProps) {
  const autoplay = useRef<AutoplayType | null>(null);

  // Initialize autoplay only if there are multiple images
  if (item.images.length > 1 && !autoplay.current) {
    autoplay.current = Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    });
  }

  return (
    <div className="space-y-4">
      {/* Event Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        {item.title}
      </h2>
      
      {/* Carousel Container */}
      <div className="relative w-full h-[750px] rounded-lg overflow-hidden shadow-lg bg-gray-100">
        <Carousel
          plugins={autoplay.current ? [autoplay.current] : []}
          opts={{ loop: item.images.length > 1 }}
          onMouseEnter={() => autoplay.current?.stop()}
          onMouseLeave={() => autoplay.current?.play()}
          className="h-full"
        >
          <CarouselContent className="h-full">
            {item.images.map((image, index) => (
              <CarouselItem key={index} className="h-full flex items-center justify-center">
                <div className="relative w-full h-[750px]">
                  <Image
                    src={image.url}
                    alt={image.alt || item.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={index === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Only show navigation arrows if there's more than one image */}
          {item.images.length > 1 && (
            <>
              <CarouselPrevious className="absolute left-4 z-10" />
              <CarouselNext className="absolute right-4 z-10" />
            </>
          )}
        </Carousel>
      </div>
    </div>
  );
}