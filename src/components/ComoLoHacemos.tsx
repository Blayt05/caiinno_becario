import { Search, BarChart3, Lightbulb, FileText, Wrench, Play, CircleCheck, Zap } from "lucide-react";

type Language = "spanish" | "english";

const copy = {
  spanish: {
    title: "¿CÓMO LO HACEMOS?",
    intro: "Nuestro enfoque sistemático garantiza resultados efectivos a través de ",
    highlight: "7 etapas fundamentales",
    outro: " de trabajo colaborativo",
  },
  english: {
    title: "HOW DO WE DO IT?",
    intro: "Our systematic approach ensures effective results through ",
    highlight: "7 fundamental stages",
    outro: " of collaborative work",
  },
};

const etapas = [
  {
    title: {
      spanish: "Identificación del problema, reto u oportunidad",
      english: "Identifying the problem, challenge or opportunity",
    },
    text: {
      spanish: "Detectamos y definimos claramente el desafío a abordar mediante investigación y análisis del contexto",
      english: "We detect and clearly define the challenge to address through research and context analysis",
    },
    Icon: Search,
    color: "text-red-600",
  },
  {
    title: {
      spanish: "Análisis preliminar del problema, reto u oportunidad",
      english: "Preliminary analysis of the problem, challenge or opportunity",
    },
    text: {
      spanish: "Realizamos un estudio profundo para comprender las causas, efectos y dimensiones del problema identificado",
      english: "We carry out an in-depth study to understand the causes, effects and dimensions of the identified problem",
    },
    Icon: BarChart3,
    color: "text-orange-600",
  },
  {
    title: {
      spanish: "Identificación de posibles soluciones",
      english: "Identifying possible solutions",
    },
    text: {
      spanish: "Generamos múltiples alternativas de solución basadas en evidencia y mejores prácticas",
      english: "We generate multiple alternative solutions based on evidence and best practices",
    },
    Icon: Lightbulb,
    color: "text-amber-600",
  },
  {
    title: {
      spanish: "Desarrollo de plan de acción",
      english: "Developing an action plan",
    },
    text: {
      spanish: "Creamos una estrategia detallada con objetivos, recursos y cronograma específicos",
      english: "We create a detailed strategy with specific objectives, resources and timeline",
    },
    Icon: FileText,
    color: "text-green-600",
  },
  {
    title: {
      spanish: "Desarrollo de propuesta, acción o solución",
      english: "Developing the proposal, action or solution",
    },
    text: {
      spanish: "Elaboramos la solución final integrando todos los elementos del plan de acción",
      english: "We build the final solution, integrating every element of the action plan",
    },
    Icon: Wrench,
    color: "text-blue-600",
  },
  {
    title: {
      spanish: "Implementación",
      english: "Implementation",
    },
    text: {
      spanish: "Ejecutamos la solución propuesta con monitoreo continuo y ajustes necesarios",
      english: "We carry out the proposed solution with continuous monitoring and the necessary adjustments",
    },
    Icon: Play,
    color: "text-purple-600",
  },
  {
    title: {
      spanish: "Evaluación",
      english: "Evaluation",
    },
    text: {
      spanish: "Medimos resultados, impacto y efectividad para generar aprendizajes y mejoras futuras",
      english: "We measure results, impact and effectiveness to generate lessons and future improvements",
    },
    Icon: CircleCheck,
    color: "text-emerald-600",
  },
];

export default function ComoLoHacemos({ language = "spanish" }: { language?: Language }) {
  const t = copy[language];

  return (
    <section
      id="como-lo-hacemos"
      className="como-dots snap-screen relative min-h-screen flex flex-col items-center justify-center px-4 py-[3vh]"
    >
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1e40af] to-[#3b82f6] bg-clip-text text-transparent">
          {t.title}
        </h2>
        <div className="mt-3 flex items-center justify-center gap-3 text-[#2563eb]">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#2563eb]" />
          <Zap className="h-4 w-4" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#22b8cf]" />
        </div>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
          {t.intro}
          <span className="font-bold text-[#1d4ed8]">{t.highlight}</span>
          {t.outro}
        </p>
      </div>

      <ol className="mt-[2vh] w-full max-w-3xl">
        {etapas.map(({ title, text, Icon, color }, i) => (
          <li
            key={title.spanish}
            className="group relative flex gap-4 rounded-2xl px-4 py-[0.7vh] transition-all duration-300 ease-out hover:z-10 hover:scale-[1.06] hover:bg-white/90 hover:shadow-xl"
          >
            <div className="relative flex flex-col items-center">
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#2563eb] bg-white shadow-md transition-transform duration-300 group-hover:scale-110">
                <Icon className={`h-5 w-5 ${color}`} />
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#2563eb] text-[10px] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <span className="w-0.5 flex-1 bg-gradient-to-b from-[#2563eb] to-[#22b8cf]" />
            </div>

            <div className="flex-1 pb-1">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 transition-colors duration-300 group-hover:text-[#1e40af]">
                {title[language]}
              </h3>
              <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-slate-200">
                <div className="h-full origin-left scale-x-0 rounded-full bg-gradient-to-r from-[#2563eb] to-[#22b8cf] transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-snug transition-colors duration-300 group-hover:text-slate-700">
                {text[language]}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
