import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import ContactSection from '@/components/ContactSection';

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

export function generateStaticParams() {
  return Object.keys(apartmentData).map((type) => ({ type }));
}

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale, type } = await params;
  setRequestLocale(locale);

  const data = apartmentData[type];
  if (!data) return null;

  return <ApartmentContent data={data} />;
}

function ApartmentContent({ data }: { data: (typeof apartmentData)[string] }) {
  const t = useTranslations('apartments');

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[50vh] min-h-[400px] mt-16">
        <Image
          src={data.heroImage}
          alt={t(`${data.key}.title`)}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <Image
          src="/images/theme/logo_mattone_glow.png"
          alt="Mattone Apartments"
          width={200}
          height={80}
          className="absolute bottom-6 right-6"
        />
        {/* Floor plans sidebar */}
        {data.floorPlans.length > 0 && (
          <div className="absolute bottom-6 left-6 flex gap-2">
            {data.floorPlans.map((fp) => (
              <a key={fp.src} href={fp.src} target="_blank" rel="noopener">
                <Image
                  src={fp.src}
                  alt={fp.alt}
                  width={120}
                  height={82}
                  className="rounded border-2 border-white/50 hover:border-mattone-gold transition-colors"
                />
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Page header */}
      <section className="bg-mattone-cream py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-semibold text-mattone-brown">{t(`${data.key}.title`)}</h1>
          <p className="text-mattone-gold mt-1">{t(`${data.key}.subtitle`)}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-mattone-text leading-relaxed mb-4">
            {t(`${data.key}.description`)}
          </p>
          <p className="text-mattone-brown font-medium mb-8">{t(`${data.key}.maxGuests`)}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-mattone-brown mb-3">{t('equipment_title')}</h3>
              <p className="text-mattone-text leading-relaxed">{t(`${data.key}.equipment`)}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-mattone-brown mb-3">{t('info_title')}</h3>
              <ul className="space-y-2 text-mattone-text">
                <li>{t('checkin')} · {t('checkout')}</li>
                <li>{t('cleaning')}</li>
                <li>{t('kitchen_fee')}</li>
                <li>{t('no_pets')}</li>
                <li>{t('wifi')}</li>
                <li>{t('free_parking')}</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-xl text-mattone-brown font-medium">{t('cta')}</p>
          </div>

          {/* Gallery */}
          {data.gallery.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.gallery.map((img) => (
                <a key={img.src} href={img.src} target="_blank" rel="noopener" className="relative aspect-[16/9] rounded-lg overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
