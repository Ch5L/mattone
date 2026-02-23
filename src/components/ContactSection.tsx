import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className="bg-mattone-cream py-16">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <p className="text-mattone-brown mb-4">{t('maps_text')}</p>
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
              />
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-mattone-brown mb-4">{t('title')}</h3>
            <div className="space-y-2 text-mattone-text">
              <p className="font-medium">{t('company')}</p>
              <p>{t('city')}</p>
              <p>{t('street')}</p>
              <p className="mt-3">
                {t('phone_label')}: <a href={`tel:${t('phone')}`} className="text-mattone-gold hover:underline">{t('phone')}</a>
              </p>
              <p>
                <a href={`mailto:${t('email')}`} className="text-mattone-gold hover:underline">{t('email')}</a>
              </p>
              <p>
                <a href={`https://${t('website')}`} className="text-mattone-gold hover:underline">{t('website')}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
