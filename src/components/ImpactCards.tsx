import Image from "next/image";
import Link from "next/link";
import ImpactFilters from "./ImpactFilters"; 


export default function ImpactCards() {
  return (
    
    <>
      <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-5 text-base sm:text-lg lg:text-xl">
        {/* Reformas */}
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg border-l-4 border-black bg-white text-black">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
            <Image
              src="/REFORMAS.png"
              alt="icono reformas de ley"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/informacion-de-referencia">
              <h3 className="font-semibold mb-2 lg:mb-4">Reformas</h3>
              <div>
                <h3 className="mb-2 lg:mb-4">Hemos logrado provocar la generación de reformas de ley</h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Investigaciones con Impacto */}
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg border-l-4 border-black bg-white text-black">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
            <Image
              src="/INFORMACION_CONFIABLE.png"
              alt="icono agendas"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/informacion-de-referencia">
              <h3 className="font-semibold mb-2 lg:mb-4">Investigaciones con Impacto</h3>
              <div>
                <h3 className="mb-2 lg:mb-4 text-justify">
                  Nuestras investigaciones son referencia en la generación de agendas públicas y de gobierno, así como para la elaboración de políticas públicas.
                </h3>
              </div>
            </Link>
          </div>
        </div>

        {/* Información confiable */}
        <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg border-l-4 border-black bg-white text-black">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
            <Image
              src="/INVESTIGACIONES_CON_IMPACTO.png"
              alt="icono libros"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <Link className="hover:opacity-80 transition-opacity flex-1" href="/impacto/informacion-de-referencia">
              <h3 className="font-semibold mb-2 lg:mb-4">Información confiable</h3>
              <div>
                <h3 className="mb-2 lg:mb-4 text-justify">
                  Nuestro trabajo es fuente de información y referencia para investigaciones académicas nacionales e internacionales
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
