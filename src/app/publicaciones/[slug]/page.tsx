// publications/[slug]/page.tsx (updated)

import { publications } from '@/data/publications_test';
import { notFound } from 'next/navigation';
import PublicationPageContent from './PublicationPageContent';

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    lang?: 'es' | 'en';
  };
};

export default function PublicationPage({ params, searchParams }: Props) {
  const publication = publications.find((p) => p.slug === params.slug);
  const language = searchParams.lang || 'es';

  if (!publication) {
    notFound();
  }

  return (
    <PublicationPageContent 
      publication={publication} 
      language={language}
    />
  );
}