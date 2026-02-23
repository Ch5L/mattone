import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ImpressumContent />;
}

function ImpressumContent() {
  const t = useTranslations('impressum');

  return (
    <section className="pt-20 md:pt-24 pb-12 md:pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-mattone-cream py-6 md:py-8 px-4 rounded-xl text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-3xl font-semibold text-mattone-brown">{t('title')}</h1>
        </div>

        <div className="bg-white rounded-xl p-5 md:p-8 shadow-sm max-w-2xl mx-auto">
          <div className="space-y-2 md:space-y-3 text-mattone-text text-sm md:text-base">
            <p className="text-lg md:text-xl font-semibold text-mattone-brown text-left">{t('company')}</p>
            <p className="text-left">{t('street')}</p>
            <p className="text-left">{t('city')}</p>
            <p className="mt-2 text-left">Telefon: {t('phone')}</p>
            <p className="text-left">Email: <a href={`mailto:${t('email')}`} className="text-mattone-gold hover:underline">{t('email')}</a></p>
            <p className="mt-2 text-left">UID-Nummer: {t('uid')}</p>
            <p className="text-left">Firmenbuchnummer: {t('fn')}</p>
            <p className="text-left">Rechtsform: {t('rechtsform')}</p>
          </div>

          <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-mattone-cream">
            <h3 className="text-base md:text-lg font-semibold text-mattone-brown mb-3">{t('bank_title')}</h3>
            <div className="space-y-1 text-mattone-text text-sm md:text-base">
              <p className="text-left">Bankinstitut: {t('bank_name')}</p>
              <p className="text-left">BIC: {t('bic')}</p>
              <p className="text-left">IBAN: {t('iban')}</p>
            </div>
          </div>

          <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-mattone-cream">
            <h3 className="text-base md:text-lg font-semibold text-mattone-brown mb-3">{t('offenlegung_title')}</h3>
            <div className="space-y-1 text-mattone-text text-sm md:text-base">
              <p className="text-left">Medieninhaber: {t('medieninhaber')}</p>
              <p className="text-left">Firmensitz: {t('firmensitz')}</p>
              <p className="text-left">Unternehmensgegenstand: {t('gegenstand')}</p>
              <p className="text-left">Geschäftsführer: {t('geschaeftsfuehrer')}</p>
              <p className="text-left">Blattlinie: {t('blattlinie')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
