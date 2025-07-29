import CarouselWithNavigation from "@/components/Carousel/carousel";
import PrivacySection from "@/components/privacySection";
import PublicationsCarousel from "@/components/Carousel/publications-carousel";
import Image from "next/image";
import Link from "next/link";
import NuestroObjetivo from "@/components/NuestroObjetivo";
import ImpactCards from "@/components/ImpactCards";
//import ImpactoSection from "@/components/Impacto";

export default function Home() {
  return (
    <div>
      {/* Navigation Section */}
      <section id="main" className="relative min-h-screen overflow-hidden">
        <CarouselWithNavigation/>
      </section>


      {/* Sections */}
      {/*
      <section id="quienes-somos" className="relative min-h-screen pb-10 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/carousel/6.jpg" // Make sure to add your image to the public folder
            alt="Background Quienes Somos"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>


        <div className="container mx-auto text-white relative z-10">

          <h2 className="text-5xl font-bold mb-20">¿QUIÉNES SOMOS?</h2>


          <p className="text-4xl font-semibold mb-18">
            CAIINNO: Innovación que transforma México.
          </p>


          <p className="text-3xl mb-18 text-justify">
            CAIINNO es una think tank constituida por personas que viven en México después de terminar estudios de posgrado en el extranjero, buscando generar un cambio positivo en México, aprovechando su experiencia, conocimiento y contactos obtenidos, principalmente como beneficiarios de la beca Fulbright.
          </p>


          <Link
            href="/quienes-somos"
            className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Saber más
          </Link>
        </div>
      </section>
      */}

      <section id="quienes-somos" className="relative lg:min-h-screen py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <img
          src="/DNA.svg"
          alt="DNA background"
          className="hidden lg:block absolute bottom-[8%] left-[8%] w-[28%] max-w-[450px] opacity-70 pointer-events-none transform rotate-12"
        />
        <img
          src="/DNA.svg"
          alt="DNA background"
          className="hidden lg:block absolute top-[35%] right-[8%] w-[25%] max-w-[400px] opacity-25 pointer-events-none transform -rotate-12"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-quienes-somos">
          <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 lg:space-y-20">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 xl:gap-16">
              
              <div className="lg:w-[35%] xl:w-[40%]">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight lg:leading-none">
                  ¿QUIÉNES<br />SOMOS?
                </h2>
              </div>

              <div className="lg:w-[65%] xl:w-[60%]">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed lg:leading-relaxed">
                  CAIINNO es una <span className="font-semibold">think tank</span> constituida por personas que viven en México después de terminar estudios de posgrado en el extranjero, buscando generar un <span className="font-semibold">cambio positivo en México</span>, aprovechando su experiencia, conocimiento y contactos obtenidos, principalmente como beneficiarios de la <span className="font-semibold">beca Fulbright</span>.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 lg:space-y-12 pt-8 md:pt-12 lg:pt-16">
              
              <div className="max-w-4xl mx-auto">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                  CAIINNO: Innovación que transforma México.
                </p>
              </div>
              
              <div className="pt-4">
                <Link
                  href="/quienes-somos"
                  className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl bg-quienes-somos-button text-white font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out"
                >
                  Saber más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    <NuestroObjetivo/>

    <section id="que-pretendemos" className="lg:min-h-screen bg-white pb-6 sm:pb-10 pt-10 sm:pt-16 md:pt-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          ¿QUÉ PRETENDEMOS?
        </h2>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/¿QUÉ PRETENDEMOS_vE.png"
            alt="¿Qué pretendemos?"
            width={1400}
            height={250}
            priority
            className="w-full max-w-[1400px]"
          />
        </div>
      </div>
    </section>

      <section id="como-lo-hacemos" className="lg:min-h-screen bg-blue-200 pb-6 sm:pb-10 pt-10 sm:pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-20">¿CÓMO LO HACEMOS?</h2>
          <div className="w-full flex justify-center items-center">
            <Image
              src="/¿CÓMO LO HACEMOS.png"
              alt="¿Cómo lo hacemos?"
              width={1250}
              height={200}
              priority
              className="w-full max-w-[1250px]"
            />
          </div>
        </div>
      </section>
 
      <section id="impacto" className="min-h-screen bg-white py-30 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12">IMPACTO</h2>
          <ImpactCards/>
          <div className="flex justify-center items-center mt-10 sm:mt-16 md:mt-20">
            <Link
              href="/impacto"
              className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl bg-quienes-somos-button text-white font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              Saber más
            </Link>
          </div>
        </div>
      </section>

        
        <PublicationsCarousel />
        <PrivacySection/>
    </div>
  );
}
