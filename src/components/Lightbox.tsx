'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxImage {
  src: string;
  alt: string;
}

export default function Lightbox({
  images,
  initialIndex,
  onClose,
}: {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => (i > 0 ? i - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setIndex((i) => (i < images.length - 1 ? i + 1 : 0));
    },
    [images.length, onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white text-4xl hover:text-mattone-gold z-10 leading-none"
        onClick={onClose}
      >
        ×
      </button>
      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-mattone-gold z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(index > 0 ? index - 1 : images.length - 1);
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-mattone-gold z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(index < images.length - 1 ? index + 1 : 0);
            }}
          >
            ›
          </button>
        </>
      )}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-contain"
          sizes="90vw"
        />
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-4 text-white/60 text-sm">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
