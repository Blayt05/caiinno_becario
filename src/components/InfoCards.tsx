import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Language = "spanish" | "english";

const buttonClass =
  "mt-7 inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl";

const cards = {
  spanish: [
    {
      title: "Explora nuestro trabajo",
      text: "Descubre nuestras investigaciones, estudios y publicaciones más recientes que contribuyen a la innovación y al desarrollo de políticas en México y América Latina.",
      label: "Ver publicaciones",
      href: "/publicaciones?lang=es",
      button: "bg-blue-600 hover:bg-blue-700",
      external: false,
    },
    {
      title: "Conoce nuestra historia",
      text: "Descubre cómo comenzó nuestra misión y los hitos que han marcado nuestro camino hacia la innovación y el desarrollo.",
      label: "Ver presentación",
      href: "/nuestra-historia.pdf",
      button: "bg-green-600 hover:bg-green-700",
      external: true,
    },
  ],
  english: [
    {
      title: "Explore our work",
      text: "Discover our latest research, studies, and publications that contribute to innovation and policy development in Mexico and Latin America.",
      label: "View Publications",
      href: "/publicaciones?lang=en",
      button: "bg-blue-600 hover:bg-blue-700",
      external: false,
    },
    {
      title: "Get to Know Our Story",
      text: "Learn about our journey, mission, and the impact we've made in fostering innovation and research in Mexico.",
      label: "Read Our Story",
      href: "/nuestra-historia.pdf",
      button: "bg-green-600 hover:bg-green-700",
      external: true,
    },
  ],
};

export default function InfoCards({ language = "spanish" }: { language?: Language }) {
  return (
    <section className="snap-block flex flex-col items-center justify-center gap-12 md:gap-16 bg-white px-4 py-12 md:py-16">
      {cards[language].map((card) => (
        <article
          key={card.title}
          className="w-full max-w-4xl rounded-2xl border border-gray-100 bg-white px-6 py-10 text-center shadow-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e3aa8]">{card.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-gray-700 leading-relaxed">
            {card.text}
          </p>
          {card.external ? (
            // A plain <a>: next/link intercepts the click and tries to route to the PDF.
            <a href={card.href} target="_blank" rel="noopener noreferrer" className={`${buttonClass} ${card.button}`}>
              {card.label}
              <ChevronRight className="h-5 w-5" />
            </a>
          ) : (
            <Link href={card.href} className={`${buttonClass} ${card.button}`}>
              {card.label}
              <ChevronRight className="h-5 w-5" />
            </Link>
          )}
        </article>
      ))}
    </section>
  );
}
