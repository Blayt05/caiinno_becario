'use client';

import { useEffect, useRef, useState } from 'react';

type FadeInTextProps = {
  paragraphs: string[];
  className?: string;
  // Milisegundos entre la aparición de una palabra y la siguiente
  wordDelay?: number;
  // Duración del desvanecido de cada palabra
  duration?: number;
};

// Muestra el texto palabra por palabra, de izquierda a derecha, con un desvanecido.
// La animación inicia cuando el bloque entra en pantalla.
export default function FadeInText({
  paragraphs,
  className,
  wordDelay = 25,
  duration = 600,
}: FadeInTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Índice global para que los párrafos aparezcan uno después del otro
  let wordIndex = 0;

  return (
    <div ref={ref} className={className}>
      {paragraphs.map((paragraph, p) => (
        <p key={p}>
          {paragraph.split(/\s+/).map((word, w) => {
            const delay = wordIndex++ * wordDelay;
            return (
              <span key={w}>
                <span
                  className="inline-block transition-[opacity,filter] ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    filter: visible ? 'blur(0)' : 'blur(4px)',
                    transitionDuration: `${duration}ms`,
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {word}
                </span>{' '}
              </span>
            );
          })}
        </p>
      ))}
    </div>
  );
}
