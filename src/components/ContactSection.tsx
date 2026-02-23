import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className="bg-mattone-cream py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center order-2 md:order-1">
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
                width={80}
                height={80}
                className="w-16 md:w-20 h-auto mx-auto"
              />
            </a>
          </div>

          <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm order-1 md:order-2">
            <h3 className="text-lg md:text-xl font-semibold text-mattone-brown mb-4">{t('title')}</h3>
            <div className="space-y-1.5 md:space-y-2 text-mattone-text text-sm md:text-base">
              <p className="font-medium text-left">{t('company')}</p>
              <p className="text-left">{t('city')}</p>
              <p className="text-left">{t('street')}</p>
              <p className="mt-3 text-left">
                {t('phone_label')}: <a href={`tel:${t('phone')}`} className="text-mattone-gold hover:underline">{t('phone')}</a>
              </p>
              <p className="text-left">
                <a href={`mailto:${t('email')}`} className="text-mattone-gold hover:underline">{t('email')}</a>
              </p>
              <p className="text-left">
                <a href={`https://${t('website')}`} className="text-mattone-gold hover:underline">{t('website')}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
