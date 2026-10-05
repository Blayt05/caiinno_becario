const links = [
  { href: "#quienes-somos", label: "¿QUIÉNES SOMOS?" },
  { href: "#nuestro-objetivo", label: "NUESTRO OBJETIVO" },
  { href: "#que-pretendemos", label: "¿QUÉ PRETENDEMOS?" },
  { href: "#como-lo-hacemos", label: "¿CÓMO LO HACEMOS?" },
  { href: "#impacto", label: "IMPACTO" },
]

export default function HeroVideo() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Full-screen video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/fondo_main_1.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 h-full bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto h-full flex flex-col justify-center">

          <div className="pt-[6vh] px-4">
            <h1
              aria-label="WE THINK BIG, WE WANT CHANGES"
              className="hero-slogan text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white"
            >
              <span aria-hidden="true">WE THINK BIG</span>
              <span aria-hidden="true">WE WANT CHANGES</span>
            </h1>
          </div>

          <div className="flex-grow pt-[5vh]">
            <div className="container mx-auto">
              <div className="flex flex-col justify-center gap-[3vh] text-white px-4">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
