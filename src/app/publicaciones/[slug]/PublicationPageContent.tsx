// publications/[slug]/PublicationPageContent.tsx (updated)

'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Publication from '@/components/Publication';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Publication as PublicationType } from '@/models/Publication';

type Language = 'es' | 'en';

type Props = {
  publication: PublicationType;
  language: Language;
};

export default function PublicationPageContent({ publication, language: initialLanguage }: Props) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setLanguage(initialLanguage);
  }, [initialLanguage]);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    const params = new URLSearchParams(searchParams);
    params.set('lang', newLanguage);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const content = publication.multilingual[language];

  return (
    <div className="min-h-screen bg-white py-20 relative">
      {/* Language Switcher in top-right corner */}
      <div className="absolute top-6 right-15">
        <LanguageSwitcher 
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
        />
      </div>
  
      <div className="container mx-auto px-4 max-w-4xl">
        <Publication 
          title={content.title}
          date={publication.date}
          description={content.description}
          media={publication.media}
          content={content.content}
          downloadLink={publication.downloadLink}
          tags={content.tags}
          authors={content.authors}
          language={language}
        />
      </div>
    </div>
  );
  
}