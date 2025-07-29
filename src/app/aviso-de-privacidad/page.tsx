import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

export default function AvisoDePrivacidad() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Main Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#004b8d]">
        Aviso de privacidad
      </h1>

      {/* Subtitle */}
      <h2 className="text-sm md:text-base font-semibold mb-4 text-gray-600">
        Aviso de Privacidad del Centro de Análisis para la Investigación en Innovación, A.C.
      </h2>

      {/* Introductory Paragraph */}
      <p className="text-xs md:text-sm text-gray-700 mb-8 leading-relaxed">
        Reconociendo la importancia que tiene el tratamiento legítimo, controlado e informado de los datos personales de los visitantes y usuarios de nuestro sitio web, ponemos a su disposición el presente Aviso de Privacidad, a fin de que conozca nuestras prácticas al obtener, usar, almacenar y, en general, tratar sus datos personales e imágenes que se obtienen a través de videograbaciones, fotografías, registros o bitácoras de acceso a nuestro portal web (en adelante y conjuntamente los &quot;Datos Personales&quot;), de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás normatividad aplicable (en adelante &quot;la Ley&quot;).
      </p>

      <p className="text-xs md:text-sm text-gray-700 mb-12 italic">
        Para información más específica, consulta los siguientes enlaces dando clic en el título de tu interés
      </p>

      {/* Privacy Sections */}
      <div className="space-y-8">
        {/* Section 1 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
          <Link href="/aviso-de-privacidad/datos-personales-que-recabamos" className="hover:opacity-80 transition-opacity">
            <h3 className="text-lg font-bold text-[#004b8d] mb-2">Datos Personales que recabamos</h3>
          </Link>
        </div>

        {/* Section 2 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
            <Link href="/aviso-de-privacidad/finalidades-yo-usos-de-los-datos-personales" className="hover:opacity-80 transition-opacity">
                <h3 className="text-lg font-bold text-[#004b8d] mb-2">Finalidades y/o usos de los Datos personales</h3>
            </Link>
        </div>

        {/* Section 3 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
          <Link href="/aviso-de-privacidad/tecnologias-de-seguimiento" className="hover:opacity-80 transition-opacity">
            <h3 className="text-lg font-bold text-[#004b8d] mb-2">Uso de las tecnologías de seguimiento</h3>
            <p className="text-sm text-gray-700">[Información sobre cookies y tecnologías similares]</p>
          </Link>
        </div>

        {/* Section 4 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
          <Link href="/aviso-de-privacidad/transferencia-datos-personales" className="hover:opacity-80 transition-opacity">
            <h3 className="text-lg font-bold text-[#004b8d] mb-2">Transferencias de Datos Personales</h3>
            <p className="text-sm text-gray-700">[Detalles sobre compartir datos con terceros]</p>
          </Link>
        </div>

        {/* Section 5 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
          <Link href={"/aviso-de-privacidad/derecho-respecto-a-datos-personales"} className="hover:opacity-80 transition-opacity">
            <h3 className="text-lg font-bold text-[#004b8d] mb-2">Derechos respecto a sus derechos Personales</h3>
            <p className="text-sm text-gray-700">[Explicación de derechos ARCO]</p>
          </Link>
        </div>

        {/* Section 6 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
          <Link href={"/aviso-de-privacidad/principios-y-deberes-en-materia-de-proteccion-de-datos-personales"} className="hover:opacity-80 transition-opacity">
            <h3 className="text-lg font-bold text-[#004b8d] mb-2">Principios y deberes en materia de protección de datos personales</h3>
            <p className="text-sm text-gray-700">[Principios de licitud, consentimiento, etc.]</p>
          </Link>
        </div>

        {/* Section 7 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-[#004b8d] mb-2">Medidas de Seguridad</h3>
            <p className="text-sm text-gray-700">
              Hemos adoptado y mantenido las medidas de seguridad, administrativas, técnicas y físicas, necesarias y a nuestro alcance para proteger los datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
            </p>
          </div>
        </div>

        {/* Section 8 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-[#004b8d] mb-2">Cambios al Aviso de Privacidad</h3>
            <p className="text-sm text-gray-700">
              Los cambios sustanciales en el presente Aviso de Privacidad, le serán comunicados a través de nuestro sitio web www.caiinno.org
            </p>
          </div>
        </div>

        {/* Section 9 */}
        <div className="flex items-start gap-4">
          <FaYoutube size={20} className="text-[#FF0000] mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-[#004b8d] mb-2">Contacto</h3>
            <p className="text-sm text-gray-700">
              En caso de tener dudas o comentarios respecto al Aviso de Privacidad, le pedimos contacte al Departamento de Protección de Datos Personales, a través de la siguiente dirección de correo electrónico: <a href="mailto:contacto@caiinno.org" className="text-blue-600 hover:underline">contacto@caiinno.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}