'use client';
import { useState } from 'react';
import Link from 'next/link';
import ImpactFilters from '@/components/ImpactFilters';
import { dataImpacto } from '@/data/informacionData'; 

export default function InformacionDeReferencia() {

   const [filtros, setFiltros] = useState<{
    año: string[];
    documento: string;
    tipoUsuario: string;
  }>({
    año: [],
    documento: '',
    tipoUsuario: ''
  });

   const resultados = dataImpacto.filter(item =>
    (filtros.año.length === 0 || filtros.año.includes(item.año.toString())) &&
    (filtros.documento === '' || item.documento === filtros.documento) &&
    (filtros.tipoUsuario === '' || item.tipoUsuario === filtros.tipoUsuario)
  );

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
          Impacto
        </h1>
        <div className="prose max-w-none text-base sm:text-lg lg:prose-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            1.- INICIATIVAS DE REFORMA DE LEY O NUEVAS LEYES
          </h2>

          <p className="mb-6 text-base sm:text-xl leading-relaxed">
            CAIINNO ha participado activamente aportando información, datos, experiencia y conocimiento para la gestión y redacción de iniciativas de las siguientes reformas de leyes federales en México:
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            2.- INFORMACIÓN DE REFERENCIA PARA USO DEL SECTOR PÚBLICO NACIONAL, Y/O PARA ELABORACIÓN DE POLÍTICAS PÚBLICAS
          </h2>
          <p className="mb-6 text-base sm:text-xl leading-relaxed">
            CAIINNO ha realizado investigaciones y generado información, datos, experiencia y conocimiento que ha sido plasmada en publicaciones o en sus bancos de datos, mismos que han sido utilizados por el gobierno federal y locales:
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            3.- FUENTE DE INFORMACIÓN PARA FUENTES ACADÉMICAS NACIONALES E INTERNACIONALES
          </h2>
          <p className="mb-6 text-base sm:text-xl leading-relaxed">
            CAIINNO ha realizado investigaciones y generado información, datos, experiencia y conocimiento que ha sido plasmada en publicaciones o en sus bancos de datos, mismos que han sido utilizados por investigadores en publicaciones académicas e incluso por organismos internacionales:
          </p>

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
