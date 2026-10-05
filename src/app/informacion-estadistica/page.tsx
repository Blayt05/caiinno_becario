"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, Users, ChevronDown, ArrowRight } from "lucide-react";

const cards = [
  {
    title: "Información Estadística sobre Propiedad Industrial",
    text: "Explore datos detallados y análisis sobre la propiedad industrial en México. Encuentre estadísticas actualizadas sobre patentes, marcas registradas, diseños industriales y más. Nuestra base de datos proporciona información valiosa sobre tendencias, sectores tecnológicos y distribución geográfica de la propiedad industrial en el país.",
    Icon: BarChart3,
    href: "/informacion-estadistica/pbi-propiedadindustrial",
  },
  {
    title: "Banco de Invenciones y Género en México a Nivel Estatal",
    text: "Descubra el panorama de la innovación en México desde una perspectiva de género. Este banco de datos único ofrece información detallada sobre la participación de mujeres y hombres en el campo de las invenciones a nivel estatal. Analice tendencias, identifique brechas y explore oportunidades para fomentar una mayor inclusión en el ecosistema de innovación mexicano.",
    Icon: Users,
    href: "/informacion-estadistica/invenciones-y-genero",
  },
];

export default function InformacionEstadistica() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-3xl md:text-4xl font-bold text-slate-800">
          Información Estadística
        </h1>
        <p className="mt-8 text-center text-sm md:text-base text-slate-600 leading-relaxed">
          La siguiente información estadística que presenta CAIINNO, representa el esfuerzo por concentrar en un sólo
          lugar la mayor cantidad de información estadística referente al papel de las inventoras dentro de la propiedad
          industrial en México. Confiamos en que les será de utilidad este esfuerzo, que representa parte de nuestra
          aportación para un cambio positivo en México.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map(({ title, text, Icon, href }, i) => (
            <article
              key={title}
              className="flex flex-col rounded-lg bg-white p-5 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <h2 className="flex items-center gap-3 text-base md:text-lg font-semibold text-slate-900">
                <Icon className="h-7 w-7 shrink-0" />
                {title}
              </h2>
              <p className={`mt-4 text-sm md:text-base text-slate-600 leading-relaxed ${open === i ? "" : "line-clamp-3"}`}>
                {text}
              </p>
              <div className="mt-auto flex items-center justify-between pt-4 text-sm font-medium">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-slate-100"
                >
                  {open === i ? "Ver menos" : "Ver más"}
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`} />
                </button>
                <Link
                  href={href}
                  className="inline-flex items-center gap-1 rounded-md px-3 py-2 hover:bg-slate-100 hover:underline"
                >
                  Explorar
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
