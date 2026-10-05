import Image from "next/image";
import Link from "next/link";

const cards = [
  {
    title: "Para mejorar el mundo",
    text: "Descubre cómo nuestras iniciativas están generando un cambio positivo en la sociedad y el medio ambiente.",
    image: "/impacto/impact-world.png",
    href: "/impacto/informacion-de-referencia",
    gradient: "bg-gradient-to-r from-[#8fd6e6] to-[#2f4fb0]",
  },
  {
    title: "Formación de nuevos inventores",
    text: "Conoce cómo desde CAIINNO formamos a los inventores del mañana.",
    image: "/impacto/impact-innovation.png",
    href: "/impacto/formacion-de-nuevos-inventores",
    gradient: "bg-gradient-to-r from-[#9ad86a] to-[#d6e389]",
  },
  {
    title: "Premios",
    text: "Conoce los reconocimientos y premios que hemos recibido por nuestro trabajo e impacto en la comunidad.",
    image: "/impacto/impact-awards.jpg",
    href: "/events",
    gradient: "bg-gradient-to-b from-[#f3c27a] via-[#d8605a] to-[#7a2530]",
  },
];

export default function ImpactoSection() {
  return (
    <section
      id="impacto"
      className="snap-screen min-h-screen flex flex-col items-center justify-center bg-[#e5e5e5] px-4 py-[4vh]"
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#2346a8] mb-[4vh]">
        IMPACTO
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-10 md:gap-12 lg:gap-24">
        {cards.map((card) => (
          <div key={card.title} className="flex w-64 lg:w-72 flex-col gap-4">
            <article className="flex flex-1 flex-col overflow-hidden rounded-3xl bg-white shadow-md">
              <div className={`flex h-32 lg:h-36 items-center justify-center px-3 ${card.gradient}`}>
                <h3 className="text-center text-xl lg:text-2xl font-bold leading-tight text-white">
                  {card.title}
                </h3>
              </div>
              <div className="relative aspect-square w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </div>
              <p className="px-5 py-4 text-sm lg:text-base leading-relaxed">{card.text}</p>
            </article>

            <Link
              href={card.href}
              className={`rounded-full py-3 text-center text-lg lg:text-xl font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${card.gradient}`}
            >
              LEER MÁS
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
