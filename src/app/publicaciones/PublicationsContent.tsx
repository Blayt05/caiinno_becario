'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { publications } from '@/data/publications_test';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type Language = 'es' | 'en';

export default function PublicationsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialLanguage = (searchParams.get('lang') as Language) || 'es';
  const [language, setLanguage] = useState<Language>(initialLanguage);

  useEffect(() => {
    const urlLang = (searchParams.get('lang') as Language) || 'es';
    setLanguage(urlLang);
  }, [searchParams]);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    const params = new URLSearchParams(searchParams);
    params.set('lang', newLanguage);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const pageTitle = language === 'es' ? 'Publicaciones' : 'Publications';

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Adjusted structure for mobile stacking */}
        <div className="flex flex-col items-center mb-12 md:flex-row md:justify-center md:relative">
          <div className="mb-4 md:absolute md:right-0 md:mb-0"> {/* Added margin-bottom for mobile spacing */}
            <LanguageSwitcher
              currentLanguage={language}
              onLanguageChange={handleLanguageChange}
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            {pageTitle}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications
            .sort((a, b) => b.date.localeCompare(a.date))
            .map((pub) => {
              const content = pub.multilingual[language];
              return (
                <Link
                  key={pub.id}
                  href={`/publicaciones/${pub.slug}?lang=${language}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {pub.media?.[0]?.type === 'image' && (
                    <div className="relative h-64 w-full">
                      <Image
                        src={pub.media[0].url}
                        alt={pub.media[0].alt || content.title}
                        fill
                        className="object-contain bg-gray-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {content.title}
                    </h2>
                    <div className="text-gray-600 mb-3">{pub.date}</div>
                    <p className="text-gray-700 line-clamp-3">
                      {content.description}
                    </p>
                    {content.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {content.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}