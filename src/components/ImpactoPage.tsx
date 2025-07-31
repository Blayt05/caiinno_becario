'use client';
import { useState } from 'react';
import Link from 'next/link';
import ImpactFilters from '@/components/ImpactFilters';
import { dataImpacto } from '@/data/informacionData';
import Image from "next/image";


export default function InformacionDeReferencia() {

  const [filtros, setFiltros] = useState<{
    año: string[];
    documento: string;
    tipoUsuario: string;
    tipoDoc: string;
  }>({
    año: [],
    documento: '',
    tipoUsuario: '',
    tipoDoc: ''
  });

  const resultados = dataImpacto.filter(item =>
    (filtros.año.length === 0 || filtros.año.includes(item.año.toString())) &&
    (filtros.documento === '' || item.documento === filtros.documento) &&
    (filtros.tipoUsuario === '' || item.tipoUsuario === filtros.tipoUsuario) &&
    (filtros.tipoDoc === '' || item.tipoDoc?.toString() === filtros.tipoDoc)
  );

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
          Impacto
        </h1>
        <div className="prose max-w-none text-base sm:text-lg lg:prose-lg text-justify">

          <p className="mb-6 text-base sm:text-xl leading-relaxed">
            A continuación de muestra el impacto de CAIINNO por el tipo de usuario que ha utilizado nuestro trabajo como fuente o referencia.
          </p>

          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg  bg-white text-black">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image
                src="/LEGISLATIVO.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                LEGISLATIVO
              </h2>
              <p className="mb-6 text-base sm:text-xl leading-relaxed">
                Congresistas a nivel federal como local han utilizado los trabajos de CAIINNO como referencia para justificar reformas de ley o nuevas legislaciones.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg  bg-white text-black">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image
                src="/GUBERNAMENTAL.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                GUBERNAMENTAL
              </h2>
              <p className="mb-6 text-base sm:text-xl leading-relaxed">
                Tanto el gobierno federal como gobiernos estatales han aprovechado los trabajos de CAIINNO como referencia para sus agendas públicas, políticas públicas, e incluso para sus planes estatales de desarrollo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg  bg-white text-black">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image
                src="/PRIVADOACADEMICO.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                PRIVADO/ACADÉMICO
              </h2>
              <p className="mb-6 text-base sm:text-xl leading-relaxed">
                El sector privado y otras ONGs han aprovechado el trabajo de CAIINNO como fuentes o referencias en sus proyectos e investigaciones.
              </p>
            </div>
          </div>



          <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 rounded-lg  bg-white text-black">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex-shrink-0">
              <Image
                src="/INTERNACIONAL.png"
                alt="icono reformas de ley"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                INTERNACIONAL
              </h2>
              <p className="mb-6 text-base sm:text-xl leading-relaxed">
                Algunos organismos internacionales como la OCDE o el BID, han utilizado el trabajo de CAIINNO como referencia.
              </p>
            </div>
          </div>



          <ImpactFilters onChange={setFiltros} />

          <ol className="space-y-8 list-decimal pl-6 text-lg">
            {resultados.map((item, index) => (
              <li key={index}>
                <p className="mb-2 text-justify">{item.titulo}</p>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 break-words"
                >
                  {item.link}
                </Link>
              </li>
            ))}
            {resultados.length === 0 && (
              <p className="italic text-gray-500">No se encontraron resultados.</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
