import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import BookingCTA from '@/components/BookingCTA';

export default async function AngebotePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <OffersContent />;
}

function OffersContent() {
  const t = useTranslations('offers');

  return (
    <section className="pt-6 md:pt-8 pb-12 md:pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-mattone-brown dark:text-mattone-cream mb-3">{t('title')}</h1>
          <div className="section-divider" />
        </div>
        <p className="text-center text-mattone-text dark:text-gray-300 text-base md:text-lg animate-fade-in-up delay-100">{t('empty')}</p>
        <div className="mt-10 animate-fade-in-up delay-200">
          <BookingCTA />
        </div>
      </div>
    </section>
  );
}
