import Image from "next/image";
import PrivacySection from "@/components/privacySection";

const razones = [
  {
    title: "PANORAMA",
    text: "En muchas escuelas de México, América Latina y el Caribe hay pocas actividades que enseñen a niñas y niños a pensar como inventores, es decir, a observar problemas, buscar soluciones y crear cosas nuevas, a pesar de que estas habilidades pueden transformar su futuro y el de sus países.",
    className: "bg-[#6b9494] text-white",
  },
  {
    title: "INVENCIÓN",
    text: "En los países desarrollados hay más inventores y patentes, en parte porque desde pequeños se les hace creer que pueden crear algo que cambie su vida o la de otros. Por ello, es importante que nuestras niñas, niños y jóvenes también desarrollen esa confianza desde la infancia, en la escuela y la familia.",
    className: "bg-[#d9c46a] text-[#444444]",
  },
  {
    title: "FORMACIÓN",
    text: "Nuestros talleres buscan despertar esa chispa creativa, además de involucrar a jóvenes universitarios quienes están definiendo su futuro profesional y a adultos, para que reconecten con su creatividad y se motiven a impulsar el espíritu inventor en las niñas y niños de su entorno.",
    className: "bg-[#6f6a99] text-white",
  },
];

const talleres = [
  {
    audience: "niñas y niños inventores",
    text: "Según varios autores, incluyendo premios nobel de economía, la mejor acción para aumentar el número de inventores a futuro es trabajando en las infancias.",
    image: "/impacto/invento-ninos.jpg",
    gradient: "from-[#9ad86a] to-[#d6e389]",
    accent: "text-[#6478f0]",
  },
  {
    audience: "mujeres inventoras",
    text: "La literatura dice que mostrar a las mujeres que pueden ser inventoras, es clave para que se motiven a serlo.",
    image: "/impacto/invento-mujeres.jpg",
    gradient: "from-[#6f55e8] to-[#8fdbe8]",
    accent: "text-[#f2c94c]",
  },
  {
    audience: "jóvenes inventoras e inventores",
    text: "A nivel licenciatura es una edad perfecta para convencer a los jóvenes que están listos para inventar.",
    image: "/impacto/invento-jovenes.jpg",
    gradient: "from-[#fdf0b5] to-[#e9a9ec]",
    accent: "text-[#e05fb5]",
  },
  {
    audience: "adultos inventores",
    text: "Árbol que nace torcido, puede enderezarse y volverse inventor. No hay edad para dar un giro en la vida y recuperar la creatividad y el ingenio.",
    image: "/impacto/invento-adultos.jpg",
    gradient: "from-[#7a55d8] to-[#d8966a]",
    accent: "text-[#f08a5d]",
  },
];

const inventos = [
  {
    title: "Taller para niñas y niños inventores",
    text: "Invento para extraer agua de un pozo y salvar la vida de una comunidad.",
    video: "/videos/taller-ninos.mp4",
    gradient: "bg-gradient-to-r from-[#8fd6e6] to-[#2f4fb0]",
  },
  {
    title: "Taller para mujeres inventoras",
    text: "Invento para purificar agua con materiales reciclables para reducir contaminación en una universidad.",
    video: "/videos/taller-mujeres.mp4",
    gradient: "bg-gradient-to-tr from-[#0f2a22] via-[#4f9a5e] to-[#e6f29a]",
  },
  {
    title: "Taller para jóvenes inventoras e inventores",
    text: "Invento para calentar agua con materiales reciclables para que la gente viviendo en zonas de pobreza, sin gas, se puedan bañar.",
    video: "/videos/taller-jovenes.mp4",
    gradient: "bg-gradient-to-b from-[#f3c27a] via-[#d8605a] to-[#3a1a22]",
  },
];

const sectionTitle = "text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#6478f0] leading-tight";

export default function FormacionDeNuevosInventores() {
  return (
    <div className="snap-page">
      <section className="snap-first relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/videos/video-impacto.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
            FORMACIÓN DE<br />NUEVOS INVENTORES E INVENTORAS
          </h1>
        </div>
      </section>

      <section className="snap-screen min-h-screen flex flex-col items-center justify-center bg-[#c7e0e0] px-4 sm:px-8 py-[4vh]">
        <h2 className={sectionTitle}>¿POR QUÉ NACIÓ ESTE TALLER?</h2>
        <p className="mt-6 max-w-3xl text-center text-base sm:text-lg md:text-xl font-bold text-[#2340a0]">
          PORQUE NO EXISTE UN PROGRAMA OFICIAL DE FORMACIÓN DE INVENTORAS E INVENTORES
        </p>

        <div className="mt-10 md:mt-14 grid w-full max-w-6xl grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {razones.map((razon) => (
            <article
              key={razon.title}
              className={`rounded-3xl p-6 lg:p-8 shadow-md ${razon.className}`}
            >
              <h3 className="text-center text-2xl lg:text-3xl font-bold tracking-wide">{razon.title}</h3>
              <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed">{razon.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="snap-screen min-h-screen flex flex-col items-center justify-center bg-[#c8d5e3] px-4 sm:px-8 py-[4vh]">
        <h2 className={sectionTitle}>TALLERES QUE<br />IMPLEMENTAMOS</h2>

        <div className="mt-10 md:mt-14 grid w-full max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {talleres.map((taller) => (
            <article
              key={taller.audience}
              className={`mx-auto flex w-full max-w-sm flex-col rounded-3xl bg-gradient-to-r p-4 shadow-md ${taller.gradient}`}
            >
              <h3 className="flex min-h-[7.5rem] flex-col justify-center pb-3 text-center text-xl lg:text-2xl font-bold leading-snug">
                Taller para
                <span className={taller.accent}>{taller.audience}</span>
              </h3>
              <div className="relative flex min-h-72 flex-1 items-center overflow-hidden rounded-3xl">
                <Image
                  src={taller.image}
                  alt={`Taller para ${taller.audience}`}
                  fill
                  sizes="(min-width: 1280px) 300px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <p className="relative p-5 text-base font-bold leading-relaxed text-white">
                  {taller.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="snap-screen min-h-screen flex flex-col items-center justify-center bg-[#c5e2e4] px-4 sm:px-8 py-[3vh]">
        <h2 className={sectionTitle}>AHORA SABEN QUE SON<br />INVENTORAS E INVENTORES</h2>

        <div className="mt-8 grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
          {inventos.map((invento) => (
            <article
              key={invento.title}
              className="mx-auto flex w-full max-w-xs flex-col overflow-hidden rounded-3xl bg-white shadow-md"
            >
              <div className={`flex min-h-20 items-center justify-center rounded-b-2xl px-4 py-3 ${invento.gradient}`}>
                <h3 className="text-center text-lg lg:text-xl font-bold leading-tight text-white">
                  {invento.title}
                </h3>
              </div>
              <div className="flex justify-center p-3">
                <video
                  className="aspect-[9/16] h-[40vh] min-h-48 max-w-full rounded-lg bg-black object-cover"
                  src={`${invento.video}#t=0.1`}
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
              <p className="flex flex-1 items-center justify-center px-4 pb-5 pt-1 text-center text-sm font-bold leading-snug">
                {invento.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <PrivacySection />
    </div>
  );
}
