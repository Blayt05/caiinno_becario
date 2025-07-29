import React from 'react'
import Link from 'next/link'

export default function IniciativasDeReforma() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center leading-tight">
          Iniciativas de Reforma de Ley
        </h1>

        <div className="prose prose-lg max-w-none text-gray-800">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            1.- INICIATIVAS DE REFORMA DE LEY O NUEVAS LEYES
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-justify mb-8 max-w-prose">
            CAIINNO ha participado activamente aportando información, datos, experiencia y conocimiento para la gestión y redacción de iniciativas de las siguientes reformas de leyes federales en México:
          </p>

          <ol className="space-y-8 list-decimal pl-6 text-base sm:text-lg lg:text-xl">
            {[
              {
                text: "Reforma y adiciona el artículo 458 de la Ley General de Instituciones y Procedimientos Electorales. Se puede consultar en la siguiente liga:",
                link: "https://gaceta.diputados.gob.mx/Gaceta/63/2017/nov/20171121-V.html#Iniciativa2"
              },
              {
                text: "Iniciativa con Proyecto de Decreto por el que se adiciona un inciso g) a la fracción XII del artículo 6o. de la Ley de la Propiedad Industrial. Se puede consultar en la siguiente liga:",
                link: "https://www.senado.gob.mx/66/gaceta_del_senado/documento/80999"
              },
              {
                text: "Iniciativa que reforma los artículos 2 y 12 de la Ley de Ciencia y Tecnología. Se puede consultar en la siguiente liga:",
                link: "https://sil.gobernacion.gob.mx/Archivos/Documentos/2018/04/asun_3695597_20180411_1521059640.pdf"
              },
              {
                text: "INICIATIVA CON PROYECTO DE DECRETO PARA CREAR LA LEY DE CIENCIA, TECNOLOGIA E INNOVACION DEL ESTADO DE TABASCO.",
                links: [
                  "https://sil.gobernacion.gob.mx/Archivos/Documentos/2018/04/asun_3695597_20180411_1521059640.pdf",
                  "https://www.senado.gob.mx/66/gaceta_del_senado/documento/82563"
                ]
              },
              {
                text: "INICIATIVA DE REFORMA SOBRE INDUSTRIAS CREATIVAS",
                link: "http://www.diputadospan.mx/DiputadosPAN/layouts/Noticia.aspx?tipo=2&idnoticia=5449&id=5449"
              },
              {
                text: "INICIATIVA CON PROYECTO DE DECRETO POR EL QUE SE ADICIONA LA FRACCIÓN XXXV AL ARTÍCULO 5 DE LA LEY FEDERAL DE PROTECCIÓN A LA PROPIEDAD INDUSTRIAL",
                link: "https://sil.gobernacion.gob.mx/Archivos/Documentos/2022/11/asun_4436753_20221109_1664902732.pdf"
              },
              {
                text: "INICIATIVA CON PROYECTO DE DECRETO POR EL QUE SE ADICIONAN LA FRACCIÓN IX AL ARTÍCULO 2, LA FRACCIÓN XXI AL ARTÍCULO 12, Y LA FRACCIÓN IX AL ARTÍCULO 13, DE LA LEY DE CIENCIA Y TECNOLOGÍA",
                link: "https://www.senado.gob.mx/66/gaceta_del_senado/documento/129516"
              },
            ].map((item, index) => (
              <li key={index}>
                <p className="mb-2 text-justify">{item.text}</p>
                {Array.isArray(item.links) ? (
                  <div className="space-y-2">
                    {item.links.map((url, i) => (
                      <Link
                        key={i}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 break-words block"
                      >
                        {url}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.link ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-words"
                  >
                    {item.link}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
