import TeamSection from "@/components/TeamSection"
import Image from "next/image"
import QuePretendemos from "@/components/QuePretendemos"
import ComoLoHacemos from "@/components/ComoLoHacemos"
import InfoCards from "@/components/InfoCards"
import FadeInText from "@/components/FadeInText"

const aboutParagraphs = [
  "The Centro de Análisis para la Investigación en Innovación, A.C. (CAIINNO), is a Mexican think tank established by individuals who completed their studies abroad with the Fulbright scholarship and decided to return to Mexico to bring about positive change in the country.",
  "Their work has led them to receive national and international acclaim. For instance, they recently designed a project that was selected by the Inter-American Development Bank (IDB) during its call for 'proposals for Latin America's and the Caribbean's recovery from COVID-19'. Their proposal was the only one selected from Mexico and one of the ten chosen worldwide from among the nearly 300 received by the IDB.",
  "In 2020, the National Institute for Access to Information (INAI) honored them with the 'Award for Innovation and Best Practices in the Protection of Personal Data', on account of the development and implementation of an artificial intelligence. In 2023 the INAI honored them with a special mention in the Innovation Award.",
  "In addition, CAIINNO has carried out activities and collaborations with Mexican and international agencies, such as the International Union for the Protection of New Varieties of Plants, the U.S. Patent and Trademark Office, the Latin American Integration Association, and the United Nations Development Program, among others.",
]

export default function AboutUs() {
  return (
    <div className="snap-page">
      <section className="snap-fill flex items-center bg-gradient-to-b from-[#eef3fd] to-[#f8faff] px-4 py-8">
        <h1 className="sr-only">About Us</h1>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">
          <FadeInText
            className="space-y-4 text-justify text-base md:text-lg leading-relaxed"
            paragraphs={aboutParagraphs}
          />
          <Image
            src="/events/premioDATOS/1.jpg"
            alt="CAIINNO team receiving the INAI innovation award"
            width={843}
            height={517}
            priority
            className="w-full rounded-2xl border-4 border-white shadow-xl"
          />
        </div>
      </section>

      <QuePretendemos language="english" />
      <ComoLoHacemos language="english" />

      <InfoCards language="english" />

      <div className="snap-block flex items-center">
        <TeamSection language="english"/>
      </div>
    </div>
  )
}
