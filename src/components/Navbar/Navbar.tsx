"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Desktop/Tablet Navbar */}
      <div className="hidden md:flex flex-col items-center pb-5 lg:pb-7">
        <div className="w-full flex justify-center items-center flex-row gap-3 px-4 m-4 lg:m-5">
          <Link href="/">
            <Image
              src="/Logo.jpg"
              alt="Caiinno logo"
              width={350}
              height={100}
              priority
              className="w-auto h-14 md:h-16 lg:h-20 xl:h-24 cursor-pointer"
            />
          </Link>
          <div className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-text-logo text-center">
            WE THINK BIG, WE WANT CHANGES
          </div>
        </div>

        <nav className="w-full">
          <div className="flex flex-wrap justify-center px-4">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xl">
              <Link href="/" className="hover:underline text-center">Inicio</Link>
              <Link href="/quienes-somos" className="hover:underline text-center">¿Quiénes somos?</Link>
              <Link href="/about-us" className="hover:underline text-center">About us</Link>
              <Link href="#areas-de-investigacion" className="hover:underline text-center">Información Estadística</Link>
              <Link href="/events" className="hover:underline text-center">Eventos</Link>
              <Link href="/publicaciones" className="hover:underline text-center">Publicaciones</Link>
              <Link href="/impacto" className="hover:underline text-center">Impacto</Link>
            </div>
          </div>
        </nav>
      </div>

      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-2">

          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/Logo.jpg"
              alt="Caiinno logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Dropdown Menu */}
        <div className={`overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="px-4 pb-3">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-base hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
              <Link href="/quienes-somos" className="text-base hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>¿Quiénes somos?</Link>
              <Link href="/about-us" className="text-base hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About us</Link>
              <Link href="#areas-de-investigacion" className="text-base hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Información Estadística</Link>
              <Link href="/events" className="text-base hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Eventos</Link>
              <Link href="/publicaciones" className="text-base hover:text-blue-600 py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Publicaciones</Link>
              <Link href="/impacto" className="text-base hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Impacto</Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="md:hidden h-[60px]" />
    </div>
  );
}
