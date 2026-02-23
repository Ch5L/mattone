import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import ApartmentCards from '@/components/ApartmentCards';
import Distances from '@/components/Distances';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations('home');

  return (
    <>
      <Hero />

      {/* Main content */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
            <h1 className="font-heading text-3xl md:text-5xl font-semibold text-mattone-brown mb-3">
              {t('title')}
            </h1>
            <div className="section-divider mb-4" />
            <h2 className="text-base md:text-lg text-mattone-gold font-light tracking-wide">{t('subtitle')}</h2>
          </div>

          <div className="max-w-none text-mattone-text space-y-5 md:space-y-6 text-sm md:text-base animate-fade-in-up delay-100">
            <p className="text-center leading-relaxed text-base md:text-lg">{t('intro')}</p>
            <p className="text-justify leading-relaxed">{t('kitchen')}</p>
            <p className="text-justify leading-relaxed">{t('bedrooms')}</p>
            <p className="text-justify leading-relaxed">{t('cleaning')}</p>
            <p className="text-justify leading-relaxed">{t('parking')}</p>
            <p className="text-justify leading-relaxed">{t('breakfast')}</p>
            <p className="text-justify leading-relaxed">{t('dining')}</p>
          </div>

          {/* Booking CTA */}
          <div className="mt-10 md:mt-14 text-center animate-fade-in-up delay-200">
            <a
              href="https://www.booking.com/hotel/at/mattone-apartments.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-mattone-gold text-white px-8 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-mattone-brown transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              {t('book_cta')} →
            </a>
          </div>

          <div className="mt-10 md:mt-14 animate-fade-in-up delay-300">
            <Distances />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-mattone-cream py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-mattone-brown mb-3">{t('gallery_title')}</h2>
            <div className="section-divider" />
          </div>
          <Gallery />
        </div>
      </section>

      {/* Apartment Cards */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-mattone-brown mb-3">{t('apartments_title')}</h2>
            <div className="section-divider" />
          </div>
          <ApartmentCards />
        </div>
      </section>
    </>
  );
}
