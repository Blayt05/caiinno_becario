"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"
import Link from "next/link"
import { publications } from "@/data/publications_test"

export default function PublicationsCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: true
    })
  )

  return (
    <div className="relative w-full overflow-hidden bg-slate-100 py-10" >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">PUBLICACIONES</h2>
        <Carousel
          className="w-full"
          plugins={[autoplay.current]}
          opts={{
            loop: true,
          }}
          onMouseEnter={() => autoplay.current.stop()}
          onMouseLeave={() => autoplay.current.play()}
        >
          <CarouselContent>
            {publications.map((pub, index) => (
              <CarouselItem key={pub.id} className="md:basis-1/2 lg:basis-1/3">
                <Link 
                  href={`/publicaciones/${pub.slug}`} 
                  className="block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 mx-2"
                >
                  {/* Publication Image */}
                  {pub.media && pub.media[0] && pub.media[0].type === 'image' && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={pub.media[0].url}
                        alt={pub.media[0].alt || pub.multilingual.es.title}
                        fill
                        className="object-contain bg-gray-100 p-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                      />
                    </div>
                  )}
                  
                  {/* Publication Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{pub.multilingual.es.title}</h3>
                    <div className="text-gray-600 mb-3">{pub.date}</div>
                    <p className="text-gray-700 line-clamp-2">{pub.multilingual.es.description}</p>
                    
                    {/* Tags */}
                    {pub.multilingual.es.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {pub.multilingual.es.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4" />
          <CarouselNext className="absolute right-4" />
        </Carousel>
        <div className="flex justify-center mt-10">
          <Link
            href="/publicaciones"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Ver todas las publicaciones
          </Link>
        </div>
      </div>
    </div>
  )
} 