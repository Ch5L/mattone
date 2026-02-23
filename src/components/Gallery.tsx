'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from './Lightbox';

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
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
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
          </button>
        ))}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
