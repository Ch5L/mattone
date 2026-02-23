import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

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
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-mattone-cream py-6 md:py-8 px-4 rounded-xl text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-mattone-brown">{t('title')}</h1>
        </div>
        <p className="text-center text-mattone-text text-base md:text-lg">{t('empty')}</p>
      </div>
    </section>
  );
}
