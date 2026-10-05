import LazyYouTube from "@/components/lazyYoutube";

export default function VideoCard({ id }: { id: string }) {
  return (
    <section className="snap-first flex items-center bg-gradient-to-b from-[#eef3fd] to-[#f8faff] px-4 py-8 md:py-10">
      <div className="video-fit mx-auto w-full max-w-5xl overflow-hidden rounded-2xl shadow-xl">
        <LazyYouTube id={id} />
      </div>
    </section>
  );
}
