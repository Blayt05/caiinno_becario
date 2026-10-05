import { Fragment } from "react";
import { Star } from "lucide-react";
import PremioCarousel from "@/components/PremioCarousel";
import { impactos } from "@/data/impact";

export default function PremiosPage() {
  const premios = [...impactos].sort((a, b) => Number(b.date) - Number(a.date));

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-0.5 w-8 rounded-full bg-gradient-to-r from-transparent to-[#2346a8]" />
            <Star className="h-6 w-6 fill-[#e6b422] text-[#e6b422]" />
            <span className="h-0.5 w-8 rounded-full bg-gradient-to-l from-transparent to-[#2346a8]" />
          </div>
          <h1 className="bg-gradient-to-r from-[#6a5af9] to-[#8a2be2] bg-clip-text pb-1 text-3xl sm:text-4xl md:text-5xl font-bold text-transparent">
            Premios y Reconocimientos
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Celebrando la excelencia y los logros destacados de nuestra comunidad
          </p>
        </header>

        <div className="space-y-16">
          {premios.map((premio, index) => (
            <Fragment key={premio.id}>
              {index > 0 && (
                <hr className="mx-auto w-1/3 border-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              )}
              <PremioCarousel premio={premio} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
