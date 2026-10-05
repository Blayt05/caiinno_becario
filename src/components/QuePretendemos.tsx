import { Landmark, Scale, NotebookText, Megaphone } from "lucide-react";

type Language = "spanish" | "english";

// radius: distance from the centre as a fraction of the disc size
// (0.47 = on the rim, 0.32 = inside the disc)
const rubros = [
  {
    label: { spanish: "Agenda de Gobierno", english: "Government agenda" },
    info: {
      spanish: "Colaboramos en la construcción de agendas gubernamentales efectivas",
      english: "We collaborate in building effective government agendas",
    },
    Icon: Scale,
    radius: 0.47,
  },
  {
    label: { spanish: "Leyes", english: "Laws" },
    info: {
      spanish: "Participamos en la creación y análisis de marcos normativos",
      english: "We take part in creating and analyzing regulatory frameworks",
    },
    Icon: Landmark,
    radius: 0.32,
  },
  {
    label: { spanish: "Agenda pública", english: "Public agenda" },
    info: {
      spanish: "Impulsamos temas de interés público en el debate nacional",
      english: "We bring issues of public interest into the national debate",
    },
    Icon: NotebookText,
    radius: 0.47,
  },
  {
    label: { spanish: "Política pública", english: "Public policy" },
    info: {
      spanish: "Desarrollamos propuestas de políticas públicas basadas en evidencia científica",
      english: "We develop public policy proposals based on scientific evidence",
    },
    Icon: Megaphone,
    radius: 0.32,
  },
];

const stats = [
  { value: "10+", label: { spanish: "Reformas de ley", english: "Law reforms" } },
  { value: "100+", label: { spanish: "Citas de entes públicos", english: "Citations by public bodies" } },
  { value: "40,000,000+", label: { spanish: "De personas impactadas", english: "People impacted" } },
];

const copy = {
  spanish: {
    title: "¿QUÉ PRETENDEMOS?",
    intro: "Colaborar con la academia, gobierno e industria para generar y cumplir nuestro objetivo. Esto a través de la ",
    highlight: "participación e impacto",
    outro: " en 4 rubros:",
    impact: "Impacto",
    multisector: "Multisectorial",
  },
  english: {
    title: "OUR PURPOSE",
    intro: "To collaborate with academia, government and industry to set and achieve our goal, through ",
    highlight: "participation and impact",
    outro: " in 4 areas:",
    impact: "Impact",
    multisector: "Multisectoral",
  },
};

export default function QuePretendemos({ language = "spanish" }: { language?: Language }) {
  const t = copy[language];

  return (
    <section
      id="que-pretendemos"
      className="snap-screen relative min-h-screen overflow-hidden flex flex-col items-center justify-center gap-[5vh] px-4 py-[4vh] bg-gradient-to-br from-[#f6f9ff] via-[#e7eefc] to-[#d3daf8]"
    >
      <div className="pointer-events-none absolute -left-10 bottom-10 h-56 w-56 rounded-full bg-[#aac8fa]/45 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-1/2 h-28 w-28 rounded-full bg-[#b9a5f7]/75 blur-2xl" />

      <div className="relative text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#2449b5] via-[#2a62b8] to-[#2b7db3] bg-clip-text text-transparent">
          {t.title}
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#38a8d8]" />
        <p className="mt-6 max-w-2xl text-sm sm:text-base md:text-lg text-[#3a4252] leading-relaxed">
          {t.intro}
          <span className="font-bold text-[#2440d0]">{t.highlight}</span>
          {t.outro}
        </p>
      </div>

      <div className="orbit relative z-10 my-[3vh]">
        <div className="orbit-disc" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/75 px-5 py-3 text-center shadow-md">
          <p className="text-base md:text-lg font-semibold text-[#2541b2]">{t.impact}</p>
          <p className="text-xs text-[#3b63e6]">{t.multisector}</p>
        </div>

        <div className="orbit-ring">
          {rubros.map(({ label, info, Icon, radius }, i) => (
            <div
              key={label.spanish}
              className="orbit-item"
              style={{ "--angle": `${i * 90 + 15}deg`, "--radius": radius } as React.CSSProperties}
            >
              <div className="orbit-counter">
                <div className="orbit-content" tabIndex={0}>
                  <span className="orbit-bubble">
                    <Icon className="h-[32%] w-[32%] text-[#3355e8]" strokeWidth={1.75} />
                  </span>
                  <span className="mt-1.5 whitespace-nowrap rounded-full bg-white/85 px-3 py-0.5 text-xs md:text-sm font-semibold text-[#2a3fa0] shadow-sm">
                    {label[language]}
                  </span>
                  <span className="orbit-tooltip" role="tooltip">
                    {info[language]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid w-full max-w-2xl grid-cols-3 gap-3 md:gap-5">
        {stats.map((stat) => (
          <div key={stat.value} className="rounded-xl bg-white/55 px-2 py-4 md:py-5 text-center shadow-md">
            <p className="text-base sm:text-xl md:text-2xl font-bold text-[#2440d0]">{stat.value}</p>
            <p className="mt-1 text-[11px] sm:text-xs text-[#555e6e]">{stat.label[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
