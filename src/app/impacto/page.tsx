import LazyYouTube from '@/components/lazyYoutube'
import React from 'react'
import ImpactCards from '@/components/ImpactCards';
import EventCarousel from "@/components/Event";
import { impactos } from "@/data/impact";


export default function Impacto() {
  const sortedImpactos = impactos.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return (
    <div className="flex flex-col items-center w-full">
      {/* YouTube Video Section */}
      <div className="w-full aspect-video mb-12">
        <LazyYouTube id="4YOGriHPf_4" />
      </div>

      {/* Impact Content Section */}
      {/* <div className="w-full max-w-4xl px-4 mb-5">        
        <p className="text-lg md:text-2xl mb-8 leading-relaxed font-bold">
          Para CAIINNO es clave la generación de nuevo conocimiento que sirva de base para provocar cambios positivos, pero es igual de importante que esa información se materialice en cambios concretos. Esto puede ser a través de figuras como las siguientes (por favor selecciona una opción):
        </p>
        <ImpactCards/>
      </div> */}
      <section id="premios-reconocimientos">
        <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold text-center mb-8">Premios y Reconocimientos</h2>
      <div className="space-y-16">
        {sortedImpactos.map((impacto) => (
          <div key={impacto.id}>
            <EventCarousel item={impacto} />
          </div>
        ))}
      </div>

      </section>
      
    </div>
  )
}