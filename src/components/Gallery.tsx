'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/uploads/IMG_5004.jpg', alt: 'Apartmenthaus Mattone Apartments' },
  { src: '/images/uploads/IMG_0993.jpg', alt: 'Apartmenthaus Mattone Apartments' },
  { src: '/images/uploads/IMG_0991.jpg', alt: 'Apartmenthaus Mattone Apartments' },
  { src: '/images/uploads/PC043178.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060716.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060728.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/PC043166.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060719.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060721.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060739.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060780.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/PC043081.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/PC043118.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060718.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060733.jpg', alt: 'Mattone Apartments' },
  { src: '/images/uploads/P2060778.jpg', alt: 'Mattone Apartments' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {galleryImages.map((img, i) => (
          <button
            key={img.src}
            className="relative aspect-[3/2] overflow-hidden rounded-lg group cursor-pointer"
            onClick={() => setLightbox(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-mattone-gold"
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-mattone-gold"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox > 0 ? lightbox - 1 : galleryImages.length - 1);
            }}
          >
            ‹
          </button>
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-mattone-gold"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(lightbox < galleryImages.length - 1 ? lightbox + 1 : 0);
            }}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
