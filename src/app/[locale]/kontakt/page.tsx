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
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-mattone-brown mb-3">{t('title')}</h1>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start animate-fade-in-up delay-100">
          {/* Contact details card */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-mattone-cream/50">
            <div className="space-y-2 md:space-y-3 text-mattone-text text-sm md:text-base">
              <p className="font-heading text-xl md:text-2xl font-semibold text-mattone-brown text-left mb-4">{t('company')}</p>
              <p className="text-left">{t('street')}</p>
              <p className="text-left">{t('city')}</p>
              <div className="pt-4 md:pt-5 space-y-3 border-t border-mattone-cream mt-4">
                <p className="text-left flex items-center gap-2">
                  <span className="text-mattone-gold">📞</span>
                  {t('phone_label')}: <a href={`tel:${t('phone')}`} className="text-mattone-gold hover:underline font-medium">{t('phone')}</a>
                </p>
                <p className="text-left flex items-center gap-2">
                  <span className="text-mattone-gold">✉️</span>
                  {t('email_label')}: <a href={`mailto:${t('email')}`} className="text-mattone-gold hover:underline font-medium">{t('email')}</a>
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="animate-fade-in-up delay-200">
            <div className="rounded-xl overflow-hidden shadow-sm border border-mattone-cream/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2673.3!2d16.1017!3d47.7348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476dc53f7c6bc8d3%3A0x8d2e90fd38a01e9d!2sMattone+Apartments!5e0!3m2!1sen!2sat!4v1700000000000!5m2!1sen!2sat"
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
