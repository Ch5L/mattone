import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const apartments = [
  { key: 'typA' as const, slug: 'typ-a', image: '/images/theme/home-apartment-typ-a.jpg' },
  { key: 'typB' as const, slug: 'typ-b', image: '/images/theme/home-apartment-typ-b.jpg' },
  { key: 'typC' as const, slug: 'typ-c', image: '/images/theme/home-apartment-typ-c.jpg' },
  { key: 'typD' as const, slug: 'typ-d', image: '/images/theme/home-apartment-typ-d.jpg' },
];

export default function ApartmentCards() {
  const t = useTranslations('apartments');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {apartments.map((apt) => (
        <Link
          key={apt.key}
          href={`/apartments/${apt.slug}`}
          className="group relative overflow-hidden rounded-xl aspect-[4/5] block"
        >
          <Image
            src={apt.image}
            alt={t(`${apt.key}.title`)}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-mattone-gold/0 group-hover:bg-mattone-gold/20 transition-colors duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-xl font-semibold mb-1">{t(`${apt.key}.title`)}</h2>
            <p className="text-white/80 text-sm mb-3">{t(`${apt.key}.cardText`)}</p>
            <span className="text-mattone-gold text-sm group-hover:underline">
              {t('more_info')} →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
