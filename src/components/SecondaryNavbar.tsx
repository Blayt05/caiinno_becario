"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SecondaryNavbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`hidden lg:block fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/Logo.jpg"
              alt="Caiinno logo"
              width={150}
              height={50}
              className="h-8 md:h-15 w-auto"
            />
          </Link>

          {/* Center: Desktop Navigation Links */}
          <div className="flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-lg">
            <Link href="/" className="hover:underline whitespace-nowrap">Inicio</Link>
            <Link href="/quienes-somos" className="hover:underline whitespace-nowrap">¿Quiénes somos?</Link>
            <Link href="/events" className="hover:underline whitespace-nowrap">Eventos</Link>
            <Link href="/publicaciones" className="hover:underline whitespace-nowrap">Publicaciones</Link>
            <Link href="/impacto" className="hover:underline whitespace-nowrap">Impacto</Link>
          </div>

          {/* Right side slogan */}
          <div className="flex items-center gap-4">
            <span className="hidden md:block lg:hidden text-base font-semibold text-text-logo">
              WE THINK BIG, WE WANT CHANGES
            </span>
            <span className="hidden lg:block text-sm font-semibold text-text-logo flex-shrink-0">
              WE THINK BIG, WE WANT CHANGES
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
