import { PublicationProps } from "@/models/Publication";
import Image from "next/image";
import PersuasiveYouTube from "@/components/lazyYoutube";

export default function Publication({
  title,
  media,
  content,
  downloadLink,
  tags,
  language = 'es',
}: PublicationProps) {
  // Helper function to get button text based on download key and language
  const getButtonText = (downloadKey: string) => {
    if (downloadKey === 'database') {
      return language === 'es' ? 'Acceder' : 'Access';
    }
    if (downloadKey === 'english-version') {
      return 'Download';
    }
    if (downloadKey === 'spanish-version') {
      return language === 'es' ? 'Descargar' : 'Download';
    }
    if (downloadKey === 'portugues-version') {
      return language === 'es' ? 'Descargar' : 'Download';
    }
    return language === 'es' ? 'Descargar' : 'Download';
  };

  return (
    <>
      <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold mb-12 text-center">{title}</h1>

      {/* Media Section */}
      <div className="mb-12">
        {media?.map((item, index) => {
          if (item.type === 'image') {
            return (
              <div key={index} className="relative aspect-[16/9] w-full mb-6">
                <Image
                  src={item.url}
                  alt={item.alt || title}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
              </div>
            );
          }
          if (item.type === 'youtube') {
            return (
              <div key={index} className="mb-6">
                <PersuasiveYouTube id={item.url} />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Content Section */}
      <div className="space-y-8 mb-12">
        {content.map((section, index) => {
          switch (section.type) {
            case 'heading':
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">{section.content}</h2>
                  {content[index + 1]?.type === 'paragraph' && (
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4">
                      {content[index + 1].content}
                    </p>
                  )}
                  {typeof downloadLink === 'object' &&
                    downloadLink &&
                    section.downloadKey &&
                    downloadLink[section.downloadKey] && (
                      <a
                        href={downloadLink[section.downloadKey]}
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                      >
                        {getButtonText(section.downloadKey)}
                      </a>
                    )}
                </div>
              );
            case 'paragraph':
              return (
                <p key={index} className="text-base sm:text-lg md:text-xl text-gray-700">
                  {section.content}
                </p>
              );
            case 'list':
              return (
                <ul key={index} className="list-disc pl-6 mb-4 text-base sm:text-lg md:text-xl text-gray-700">
                  {(section.content as string[]).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case 'quote':
              return (
                <blockquote
                  key={index}
                  className="border-l-4 border-gray-300 pl-4 italic my-4 text-base sm:text-lg md:text-xl text-gray-600"
                >
                  {section.content}
                </blockquote>
              );
            default:
              return null;
          }
        })}
      </div>

      {/* Tags Section */}
      {tags && (
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm sm:text-base"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}