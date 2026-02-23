import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Gallery from '@/components/Gallery';
import ApartmentCards from '@/components/ApartmentCards';
import Distances from '@/components/Distances';
import ContactSection from '@/components/ContactSection';

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
      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-semibold text-mattone-brown mb-2">
              {t('title')}
            </h1>
            <h2 className="text-base md:text-lg text-mattone-gold">{t('subtitle')}</h2>
          </div>

          <div className="max-w-none text-mattone-text space-y-4 md:space-y-6 text-sm md:text-base">
            <p className="text-center leading-relaxed">{t('intro')}</p>
            <p className="leading-relaxed">{t('kitchen')}</p>
            <p className="leading-relaxed">{t('bedrooms')}</p>
            <p className="leading-relaxed">{t('cleaning')}</p>
            <p className="leading-relaxed">{t('parking')}</p>
            <p className="leading-relaxed">{t('breakfast')}</p>
            <p className="leading-relaxed">{t('dining')}</p>
          </div>

          <div className="mt-8 md:mt-12">
            <Distances />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-mattone-cream py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-3 md:px-4">
          <Gallery />
        </div>
      </section>

      {/* Apartment Cards */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <ApartmentCards />
        </div>
      </section>

      <ContactSection />
    </>
  );
}
