import Link from "next/link";
import { BsFillSignStopFill } from "react-icons/bs";

export default function PrivacySection() {
  return (
    <div className="bg-gray-100 py-6 px-4 border-t border-gray-200">
      <Link 
        href="/aviso-de-privacidad" 
        className="flex flex-col items-center gap-2 group hover:bg-gray-200 transition-colors p-4 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <BsFillSignStopFill className="text-red-600" size={100} />
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 group-hover:text-blue-600">
            ¿Cuánto te importa tu privacidad?
          </h3>
        </div>
        <p className="text-center text-3xl sm:text-4xl md:text-5xl text-gray-600 group-hover:text-blue-500">
          Te invitamos a leer nuestro<br />
          <span className="font-bold underline">AVISO DE PRIVACIDAD</span>
        </p>
      </Link>
    </div>
  );
}