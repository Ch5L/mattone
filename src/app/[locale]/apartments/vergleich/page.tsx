import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

const types = [
  { key: 'typA' as const, slug: 'typ-a', image: '/images/theme/home-apartment-typ-a.jpg' },
  { key: 'typB' as const, slug: 'typ-b', image: '/images/theme/home-apartment-typ-b.jpg' },
  { key: 'typC' as const, slug: 'typ-c', image: '/images/theme/home-apartment-typ-c.jpg' },
  { key: 'typD' as const, slug: 'typ-d', image: '/images/theme/home-apartment-typ-d.jpg' },
];

export default async function ComparePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CompareContent />;
}

function CompareContent() {
  const t = useTranslations();

  const features = [
    { label: t('compare.size'), values: ['~85m²', '~55m²', '~42m²', '~40m²'] },
    { label: t('compare.bedrooms'), values: ['2', '1', '1*', '1*'] },
    { label: t('compare.max_guests'), values: ['6', '4', '4', '4'] },
    { label: t('compare.balcony'), values: ['✓', '✓', '✓', '—'] },
    { label: t('compare.terrace'), values: ['✓', '—', '—', '—'] },
    { label: t('compare.separate_wc'), values: ['✓', '~', '—', '—'] },
    { label: t('compare.kitchen'), values: ['✓', '✓', '✓', '✓'] },
    { label: t('compare.air_con'), values: ['✓', '✓', '✓', '✓'] },
    { label: t('compare.flatscreen'), values: ['✓✓', '✓✓', '✓', '✓'] },
    { label: t('compare.wifi'), values: ['✓', '✓', '✓', '✓'] },
    { label: t('compare.nespresso'), values: ['✓', '✓', '✓', '✓'] },
    { label: t('compare.breakfast'), values: ['✓', '✓', '✓', '✓'] },
    { label: t('compare.parking'), values: ['✓', '✓', '✓', '✓'] },
  ];

  return (
    <section className="pt-6 md:pt-8 pb-12 md:pb-16 dark:bg-[#1a1410]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-mattone-brown dark:text-mattone-cream mb-3">
            {t('compare.title')}
          </h1>
          <div className="section-divider mb-4" />
          <p className="text-mattone-text dark:text-gray-400 text-sm md:text-base">
            {t('compare.subtitle')}
          </p>
        </div>

        {/* Comparison table */}
        <div className="animate-fade-in-up delay-100 overflow-x-auto">
          <table className="w-full border-collapse">
            {/* Header with images */}
            <thead>
              <tr>
                <th className="p-2 md:p-3 text-left w-[140px] md:w-[180px]" />
                {types.map((apt) => (
                  <th key={apt.key} className="p-1.5 md:p-3 text-center">
                    <Link href={`/apartments/${apt.slug}`} className="group block">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2 md:mb-3">
                        <Image
                          src={apt.image}
                          alt={t(`apartments.${apt.key}.title`)}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 25vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-mattone-gold/20 transition-colors" />
                      </div>
                      <span className="font-heading text-sm md:text-lg font-semibold text-mattone-brown dark:text-mattone-cream group-hover:text-mattone-gold transition-colors">
                        {t(`apartments.${apt.key}.title`)}
                      </span>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr
                  key={feature.label}
                  className={`border-b border-mattone-cream/50 dark:border-[#3d3229] ${
                    i % 2 === 0 ? 'bg-mattone-cream/30 dark:bg-[#241e18]/50' : ''
                  }`}
                >
                  <td className="p-2 md:p-3 text-xs md:text-sm font-medium text-mattone-brown dark:text-gray-200 whitespace-nowrap">
                    {feature.label}
                  </td>
                  {feature.values.map((val, j) => (
                    <td key={j} className="p-2 md:p-3 text-center text-xs md:text-sm text-mattone-text dark:text-gray-300">
                      {val === '✓' || val === '✓✓' ? (
                        <span className="text-mattone-gold font-bold">{val}</span>
                      ) : val === '~' ? (
                        <span className="text-mattone-gold/60" title={t('compare.partial')}>~</span>
                      ) : val === '—' ? (
                        <span className="text-mattone-text/30 dark:text-gray-600">—</span>
                      ) : (
                        <span className="font-medium">{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footnotes */}
        <div className="mt-6 space-y-1 text-xs text-mattone-text/60 dark:text-gray-500 animate-fade-in-up delay-200">
          <p>* {t('compare.footnote_bedroom')}</p>
          <p>~ {t('compare.footnote_partial')}</p>
          <p>✓✓ {t('compare.footnote_double_tv')}</p>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center animate-fade-in-up delay-300">
          <a
            href="https://www.booking.com/hotel/at/mattone-apartments.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-mattone-gold text-white px-8 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-mattone-brown transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            {t('home.book_cta')} →
          </a>
        </div>
      </div>
    </section>
  );
}
