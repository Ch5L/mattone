'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import Lightbox from '@/components/Lightbox';

const apartmentData: Record<string, {
  key: 'typA' | 'typB' | 'typC' | 'typD';
  heroImage: string;
  floorPlans: { src: string; alt: string }[];
  gallery: { src: string; alt: string }[];
}> = {
  'typ-a': {
    key: 'typA',
    heroImage: '/images/apartments/typ-a-apartments-mattone-1600x1088.jpg',
    floorPlans: [
      { src: '/images/apartments/typ-a-top8_1.jpg', alt: 'Floor Plan Top 8' },
      { src: '/images/apartments/typ-a-top9_5.jpg', alt: 'Floor Plan Top 9' },
    ],
    gallery: [
      { src: '/images/apartments/82085691.jpg', alt: 'Mattone Apartments' },
      { src: '/images/apartments/82085695.jpg', alt: 'Mattone Apartments' },
      { src: '/images/apartments/apartmenthaus.jpg', alt: 'Mattone Apartments' },
    ],
  },
  'typ-b': {
    key: 'typB',
    heroImage: '/images/apartments/typ-b-apartments-mattone-1600x1088.jpg',
    floorPlans: [
      { src: '/images/apartments/typ-b-top14_5.jpg', alt: 'Floor Plan Top 14' },
      { src: '/images/apartments/typ-b-top13_1.jpg', alt: 'Floor Plan Top 13' },
      { src: '/images/apartments/typ-b-top5_5_A.jpg', alt: 'Floor Plan Top 5' },
      { src: '/images/apartments/typ-b-top4_1.jpg', alt: 'Floor Plan Top 4' },
      { src: '/images/apartments/typ-b-top3_1.jpg', alt: 'Floor Plan Top 3' },
    ],
    gallery: [],
  },
  'typ-c': {
    key: 'typC',
    heroImage: '/images/apartments/typ-c-apartments-mattone-1600x1088.jpg',
    floorPlans: [
      { src: '/images/apartments/typ-c-top6_5.jpg', alt: 'Floor Plan Top 6' },
    ],
    gallery: [],
  },
  'typ-d': {
    key: 'typD',
    heroImage: '/images/apartments/typ-d-apartments-mattone-1600x1088.jpg',
    floorPlans: [
      { src: '/images/apartments/typ-d-top10_5.jpg', alt: 'Floor Plan Top 10' },
      { src: '/images/apartments/typ-d-top11_1.jpg', alt: 'Floor Plan Top 11' },
      { src: '/images/apartments/typ-d-top12_1.jpg', alt: 'Floor Plan Top 12' },
    ],
    gallery: [],
  },
};

export default function ApartmentContent({ type }: { type: string }) {
  const data = apartmentData[type];
  const t = useTranslations('apartments');
  const nav = useTranslations('nav');
  const [lightbox, setLightbox] = useState<{ images: { src: string; alt: string }[]; index: number } | null>(null);

  if (!data) return null;

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[280px] md:min-h-[400px] mt-14 md:mt-16">
        <Image
          src={data.heroImage}
          alt={t(`${data.key}.title`)}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <Image
          src="/images/theme/logo_mattone_clean.png"
          alt="Mattone Apartments"
          width={200}
          height={170}
          className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-[100px] md:w-[160px] h-auto drop-shadow-lg"
        />
        {data.floorPlans.length > 0 && (
          <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex gap-2 overflow-x-auto max-w-[55%] md:max-w-none scrollbar-hide">
            {data.floorPlans.map((fp, i) => (
              <button
                key={fp.src}
                onClick={() => setLightbox({ images: data.floorPlans, index: i })}
                className="cursor-pointer shrink-0"
              >
                <Image
                  src={fp.src}
                  alt={fp.alt}
                  width={120}
                  height={82}
                  className="rounded border-2 border-white/50 hover:border-mattone-gold transition-colors w-[80px] md:w-[120px] h-auto"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Page header */}
      <section className="bg-mattone-cream py-6 md:py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-2xl md:text-4xl font-semibold text-mattone-brown">{t(`${data.key}.title`)}</h1>
          <p className="text-mattone-gold mt-1 text-sm md:text-base text-center">{t(`${data.key}.subtitle`)}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-justify text-base md:text-lg text-mattone-text leading-relaxed mb-4 animate-fade-in-up">
            {t(`${data.key}.description`)}
          </p>
          <p className="text-left text-mattone-brown font-medium mb-6 md:mb-8">{t(`${data.key}.maxGuests`)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-fade-in-up delay-100">
            <div>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-mattone-brown mb-3">{t('equipment_title')}</h3>
              <p className="text-justify text-mattone-text leading-relaxed text-sm md:text-base">{t(`${data.key}.equipment`)}</p>
            </div>
            <div>
              <h3 className="font-heading text-lg md:text-xl font-semibold text-mattone-brown mb-3">{t('info_title')}</h3>
              <ul className="space-y-2 text-mattone-text text-sm md:text-base list-none">
                <li className="text-left">{t('checkin')} · {t('checkout')}</li>
                <li className="text-left">{t('cleaning')}</li>
                <li className="text-left">{t('kitchen_fee')}</li>
                <li className="text-left">{t('no_pets')}</li>
                <li className="text-left">{t('wifi')}</li>
                <li className="text-left">{t('free_parking')}</li>
              </ul>
            </div>
          </div>

          {/* CTA with contact button */}
          <div className="mt-10 md:mt-14 text-center animate-fade-in-up delay-200">
            <p className="text-center text-lg md:text-xl text-mattone-brown font-heading font-medium mb-5">{t('cta')}</p>
            <Link
              href="/kontakt"
              className="inline-block bg-mattone-gold text-white px-8 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-mattone-brown transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {nav('contact')} →
            </Link>
          </div>

          {data.gallery.length > 0 && (
            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {data.gallery.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLightbox({ images: data.gallery, index: i })}
                  className="relative aspect-[16/9] rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
