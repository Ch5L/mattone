import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations('contact');

  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-mattone-cream py-6 md:py-8 px-4 rounded-xl text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-mattone-brown">{t('title')}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm">
            <div className="space-y-2 md:space-y-3 text-mattone-text text-sm md:text-base">
              <p className="text-lg md:text-xl font-semibold text-mattone-brown text-left">{t('company')}</p>
              <p className="text-left">{t('street')}</p>
              <p className="text-left">{t('city')}</p>
              <div className="pt-3 md:pt-4 space-y-2">
                <p className="text-left">
                  {t('phone_label')}: <a href={`tel:${t('phone')}`} className="text-mattone-gold hover:underline">{t('phone')}</a>
                </p>
                <p className="text-left">
                  {t('email_label')}: <a href={`mailto:${t('email')}`} className="text-mattone-gold hover:underline">{t('email')}</a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-mattone-brown mb-4 text-sm md:text-base text-center">{t('maps_text')}</p>
            <a
              href={t('maps_url')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/theme/google_maps.png"
                alt="Google Maps"
                width={100}
                height={100}
                className="w-16 md:w-24 h-auto mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
