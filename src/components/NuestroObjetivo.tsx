import { FaBalanceScale } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { LiaLightbulb } from "react-icons/lia";
import { BsGenderAmbiguous } from "react-icons/bs";
import { BsRocket } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
import { GiAtom } from "react-icons/gi";
import { FaRegHandBackFist } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

const NuestroObjetivo = () => {
  return (
    <section id="nuestro-objetivo" className="relative min-h-screen pb-10 pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/carousel/6.jpg"
          alt="Background Nuestro Objetivo"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto text-white relative z-10 px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-10 md:mb-25">NUESTRO OBJETIVO</h2>

        <p className="text-xl md:text-2xl lg:text-3xl mb-20 text-justify">
          Ayudar a resolver algunos de los retos que enfrenta México en 9 áreas, a través de investigaciones, propuestas y ejecución de proyectos, que permitan tener un país más transparente, incluyente e innovador. Para ello aplicamos los principios de la INNOVACIÓN así como nuestra experiencia y conocimientos.
        </p>

        <p className="text-xl md:text-2xl lg:text-3xl mb-20 font-bold text-center">
          Además, buscamos que nuestros proyectos tengan un enfoque transversal que beneficie e impacte a las 9 áreas de trabajo:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-6 justify-items-center mb-10 md:mb-16">
            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <FaBalanceScale className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Política pública y Estado de Derecho</span>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <IoBarChartSharp className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Economía y Desarrollo</span>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <LiaLightbulb className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Propiedad Intelectual</span>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <BsGenderAmbiguous className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Género</span>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <BsRocket className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Emprendimiento y Negocio</span>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <RiComputerLine className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Transparencia y Responsabilidad Del Gobierno</span>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <IoBookOutline className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Educación</span>
            </div>
            
            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <GiAtom className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Ciencia, Tecnología e Innovación</span>
            </div>

            <div className="flex flex-col items-center group hover:scale-130 transition-transform duration-300 cursor-pointer">
                <FaRegHandBackFist className="text-5xl md:text-6xl lg:text-7xl text-white group-hover:text-white transition-colors duration-300" />
                <span className="text-sm mt-2 text-center font-bold group-hover:text-white transition-colors duration-300">Participación Ciudadana y Democracia</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NuestroObjetivo;