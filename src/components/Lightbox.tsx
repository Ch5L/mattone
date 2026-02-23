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
  const [touchStart, setTouchStart] = useState<number | null>(null);

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

  // Swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setIndex(index < images.length - 1 ? index + 1 : 0);
      } else {
        setIndex(index > 0 ? index - 1 : images.length - 1);
      }
    }
    setTouchStart(null);
  };

  return (
    <div
      className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        className="absolute top-3 right-4 text-white text-4xl hover:text-mattone-gold z-10 leading-none p-2"
        onClick={onClose}
      >
        ×
      </button>
      {images.length > 1 && (
        <>
          <button
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl hover:text-mattone-gold z-10 p-2 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              setIndex(index > 0 ? index - 1 : images.length - 1);
            }}
          >
            ‹
          </button>
          <button
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl hover:text-mattone-gold z-10 p-2 hidden md:block"
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
        className="relative w-full h-full max-w-5xl max-h-[80vh] m-4 md:mx-16"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index].src}
          alt={images[index].alt}
          fill
          className="object-contain"
          sizes="95vw"
        />
      </div>
      {images.length > 1 && (
        <div className="absolute bottom-4 text-white/60 text-sm">
          {index + 1} / {images.length}
          <span className="md:hidden text-white/40 ml-2">← swipe →</span>
        </div>
      )}
    </div>
  );
}
