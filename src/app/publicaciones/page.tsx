import { Suspense } from 'react';
import PublicationsContent from './PublicationsContent';

export default function PublicationsPage() {
  return (
    <Suspense fallback={<div>Cargando publicaciones...</div>}>
      <PublicationsContent />
    </Suspense>
  );
}
