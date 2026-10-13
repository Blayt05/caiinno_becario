'use client';
import { useState } from 'react';
import Link from 'next/link';
import ImpactFilters from '@/components/ImpactFilters';
import { dataImpacto } from '@/data/informacionData';
import Image from "next/image";
import { FaRegFilePdf } from 'react-icons/fa';

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
    (filtros.documento === '' || item.titulo === filtros.documento) &&
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



          <ImpactFilters onChange={setFiltros} años={[...new Set(dataImpacto.map(item => item.año))].sort()} />

        </div>

        <div className="not-prose overflow-x-auto rounded-sm shadow-xl">
          <table className="w-full text-center text-sm sm:text-base text-gray-900">
            <thead className="text-white font-semibold">
              <tr>
                <th className="bg-[#34465d] px-3 py-4">#</th>
                <th className="bg-[#6fc3a1] px-3 py-4">Año</th>
                <th className="bg-[#34465d] px-3 py-4">Usuario</th>
                <th className="bg-[#6fc3a1] px-3 py-4">Título</th>
                <th className="bg-[#34465d] px-3 py-4">pdf</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((item, index) => {
                const { usuario, titulo } = item;
                return (
                  <tr key={index} className="odd:bg-white even:bg-[#f7f7f7]">
                    <td className="px-3 py-4 border-r border-gray-100">{index + 1}</td>
                    <td className="px-3 py-4 border-r border-gray-100">{item.año}</td>
                    <td className="px-4 py-4 border-r border-gray-100 min-w-[10rem]">{usuario}</td>
                    <td className="px-4 py-4 border-r border-gray-100 min-w-[14rem]">{titulo}</td>
                    <td className="px-3 py-4">
                      {item.link && (
                      <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir documento: ${titulo}`}
                        className="inline-flex text-[#d32f2f] transition-transform hover:scale-110"
                      >
                        <FaRegFilePdf className="h-7 w-7" />
                      </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
              {resultados.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-3 py-6 italic text-gray-500">
                    No se encontraron resultados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
