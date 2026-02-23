import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import { setRequestLocale } from 'next-intl/server';

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
    <section className="pt-6 md:pt-8 pb-12 md:pb-16 min-h-[60vh]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-mattone-brown dark:text-mattone-cream mb-3">{t('title')}</h1>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start animate-fade-in-up delay-100">
          {/* Contact details card */}
          <div className="bg-white dark:bg-[#2a231c] rounded-xl p-6 md:p-8 shadow-sm border border-mattone-cream/50 dark:border-[#3d3229]">
            <div className="space-y-2 md:space-y-3 text-mattone-text text-sm md:text-base">
              <p className="font-heading text-xl md:text-2xl font-semibold text-mattone-brown dark:text-mattone-cream text-left mb-4">{t('company')}</p>
              <p className="text-left dark:text-gray-100">{t('street')}</p>
              <p className="text-left dark:text-gray-100">{t('city')}</p>
              <div className="pt-4 md:pt-5 space-y-3 border-t border-mattone-cream dark:border-[#3d3229] mt-4">
                <p className="text-left flex items-center gap-2 dark:text-gray-100">
                  <span className="text-mattone-gold">📞</span>
                  {t('phone_label')}: <a href={`tel:${t('phone')}`} className="text-mattone-gold hover:underline font-medium">{t('phone')}</a>
                </p>
                <p className="text-left flex items-center gap-2 dark:text-gray-100">
                  <span className="text-mattone-gold">✉️</span>
                  {t('email_label')}: <a href={`mailto:${t('email')}`} className="text-mattone-gold hover:underline font-medium">{t('email')}</a>
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps embed - search by place name for labeled marker */}
          <div className="animate-fade-in-up delay-200">
            <div className="rounded-xl overflow-hidden shadow-sm border border-mattone-cream/50 dark:border-[#3d3229]">
              <iframe
                src="https://www.google.com/maps?q=Mattone+Apartments+F%C3%B6hrenauerstra%C3%9Fe+7+Lanzenkirchen&z=17&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mattone Apartments Location"
                className="w-full"
              />
            </div>
            <p className="text-center text-mattone-text/60 text-xs mt-2">{t('maps_text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
