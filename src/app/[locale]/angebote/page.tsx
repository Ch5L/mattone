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
    <section className="pt-24 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-mattone-cream py-8 px-4 rounded-xl text-center mb-12">
          <h1 className="text-3xl font-semibold text-mattone-brown">{t('title')}</h1>
        </div>
        <p className="text-center text-mattone-text text-lg">{t('empty')}</p>
      </div>
    </section>
  );
}
