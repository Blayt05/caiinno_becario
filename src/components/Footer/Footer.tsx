import Image from "next/image"
import Link from "next/link"
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Blue header bar */}
      <div className="w-full h-16 md:h-20 bg-[#004b8d]"></div>

      {/* Footer content */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Contact column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Contacto</h2>
            <p className="text-sm md:text-base max-w-xs">
              Av. Matanzas 719, Lindavista,
              <br />
              Del. Gustavo A. Madero,
              <br />
              CDMX, C.P. 02409.
            </p>
            <p className="mt-3 md:mt-4">
              <Link href="mailto:contacto@caiinno.org" className="hover:underline text-sm md:text-base">
                contacto@caiinno.org
              </Link>
            </p>
          </div>

          {/* Social media column */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Síguenos en nuestras redes</h2>
            <div className="flex gap-4 md:gap-6">
                <Link 
                    href="https://www.facebook.com/profile.php?id=61573368978008" 
                    aria-label="Facebook" 
                    className="hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaFacebook size={30} className="text-[#1877F2]"/>
                </Link>
                <Link 
                    href="https://x.com/CaiinnoOficial" 
                    aria-label="X" 
                    className="hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaSquareXTwitter size={30} className="text-black"/>
                </Link>
                <Link 
                    href="https://www.youtube.com/@caiinnomedia2089/featured" 
                    aria-label="YouTube" 
                    className="hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaYoutube size={30} className="text-[#FF0000]"/>
                </Link>
                <Link 
                    href="https://www.linkedin.com/company/caiinno/" 
                    aria-label="Linkedin" 
                    className="hover:opacity-80 transition-opacity"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FaLinkedin size={30} className="text-[#2969b2]"/>
                </Link>
            </div>
          </div>

          {/* Other links column with logo */}
          <div className="flex flex-col items-center md:items-end">
            <div className="text-center md:text-right">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Otros</h2>
              <ul className="space-y-2 text-sm md:text-base">
                <li>
                  <Link href="#" className="hover:underline">
                    Información Estadística
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Estado General de la Educación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Nuevos Proyectos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Índice Nacional de CTI 2015
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-6 md:mt-8">
              <Image
                src="/Logo.jpg"
                alt="CAIINNO Logo"
                width={160}
                height={80}
                className="object-contain w-40 md:w-48"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} CAIINNO. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}