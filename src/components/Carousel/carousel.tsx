"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export default function CarouselWithNavigation() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  )

  // Sample image URLs - replace with your actual images
  const images = ["/carousel/1.jpg", "/carousel/2.jpg", "/carousel/3.jpg", "/carousel/4.jpg", "/carousel/5.jpg", "/carousel/6.jpg", "/carousel/7.jpg", "/carousel/8.jpg"]

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen carousel background */}
      <Carousel
        className="absolute inset-0 w-full h-full"
        plugins={[autoplay.current]}
        opts={{
          loop: true, // Enable infinite looping
        }}

        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative w-full h-full min-h-screen">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/30" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 z-20 hidden sm:inline-flex" />
        <CarouselNext className="absolute right-4 z-20 hidden sm:inline-flex" />
      </Carousel>

      <div className="relative z-10 h-full bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto h-full flex flex-col justify-center">
          
          <div className="pt-20 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white">
              WE THINK BIG, WE WANT CHANGES
            </h1>
          </div>

          <div className="flex-grow pt-16">
            <div className="container mx-auto">
              <div className="flex flex-col justify-center gap-8 text-white px-4">
                <a href="#quienes-somos" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold hover:text-gray-300 transition-colors">
                  ¿QUIÉNES SOMOS?
                </a>
                <a href="#nuestro-objetivo" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold hover:text-gray-300 transition-colors">
                  NUESTRO OBJETIVO
                </a>
                <a href="#que-pretendemos" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold hover:text-gray-300 transition-colors">
                  ¿QUÉ PRETENDEMOS?
                </a>
                <a href="#como-lo-hacemos" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold hover:text-gray-300 transition-colors">
                  ¿CÓMO LO HACEMOS?
                </a>
                <a href="#impacto" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold hover:text-gray-300 transition-colors">
                  IMPACTO
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>  
    </div>
  )
}

