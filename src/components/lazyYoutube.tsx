"use client"

import { useState } from 'react';
import Image from 'next/image';

export default function PersuasiveYouTube({ id }: { id: string }) {
  const [loaded, setLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className="relative aspect-video w-full overflow-hidden shadow-lg cursor-pointer group">
      {/* Thumbnail with Play Button Overlay */}
      {!loaded && (
        <div 
          onClick={() => setLoaded(true)}
          className="absolute inset-0 transition-all duration-300 group-hover:scale-105"
        >
          <Image
            src={thumbnailUrl}
            alt="Video thumbnail"
            fill
            className="object-cover"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all group-hover:bg-black/30">
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transform transition-all group-hover:scale-110">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 text-white text-lg font-medium">
            Watch Our Story
          </div>
        </div>
      )}

      {/* Actual YouTube Player */}
      {loaded && (
        <iframe
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}