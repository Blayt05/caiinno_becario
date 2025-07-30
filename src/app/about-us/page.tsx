import TeamSection from "@/components/TeamSection"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Us</h1>

        <div className="prose max-w-none text-justify text-lg lg:text-2xl">
          <p className="mb-6">
            The Centro de Análisis para la Investigación en Innovación, A.C. (CAIINNO), is a Mexican think tank
            established by individuals who completed their studies abroad with the Fulbright scholarship and decided to
            return to Mexico to bring about positive change in the country.
          </p>
          <p className="mb-6">
            Their work has led them to receive national and international acclaim. For instance, they recently designed a
            project that was selected by the Inter-American Development Bank (IDB) during its call for "proposals for
            Latin America's and the Caribbean's recovery from COVID-19". Their proposal was the only one selected from
            Mexico and one of the ten chosen worldwide from among the nearly 300 received by the IDB.
          </p>
          <p className="mb-6">
            In 2020, the National Institute for Access to Information (INAI) honored them with the "Award for Innovation
            and Best Practices in the Protection of Personal Data", on account of the development and implementation of
            an artificial intelligence. In 2023 the INAI honored them with a special mention in the Innovation Award.
          </p>
          <p className="mb-10">
            In addition, CAIINNO has carried out activities and collaborations with Mexican and international agencies,
            such as the International Union for the Protection of New Varieties of Plants, the U.S. Patent and Trademark
            Office, the Latin American Integration Association, and the United Nations Development Program, among others.
          </p>
        </div>
      </div>

      {/* Full-width images */}
      <div className="w-full relative mt-12">
        <div className="w-full relative">
          <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative">
            <Image
              src="/QUEPRETENDEMOS_VE.png"
              alt="Our Aim"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full relative mt-12">
          <div className="aspect-[16/9] sm:aspect-[2/1] md:aspect-[21/9] relative">
            <Image
              src="/COMOLOHACEMOS_VE.png"
              alt="How We Achieve It"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
            Explore Our Work
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Discover our latest research, studies, and publications that contribute to innovation 
            and policy development in Mexico and Latin America.
          </p>
          <Link
            href="/publicaciones?lang=en"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold text-base sm:text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-xl"
          >
            View Our Publications
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
      <TeamSection language="english"/>
    </>
  )
}
