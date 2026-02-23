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
    <section className="pt-24 pb-16 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-mattone-cream py-8 px-4 rounded-xl text-center mb-12">
          <h1 className="text-3xl font-semibold text-mattone-brown">{t('title')}</h1>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
          <div className="space-y-3 text-mattone-text">
            <p className="text-xl font-semibold text-mattone-brown">{t('company')}</p>
            <p>{t('street')}</p>
            <p>{t('city')}</p>
            <p className="mt-2">Telefon: {t('phone')}</p>
            <p>Email: <a href={`mailto:${t('email')}`} className="text-mattone-gold hover:underline">{t('email')}</a></p>
            <p className="mt-2">UID-Nummer: {t('uid')}</p>
            <p>Firmenbuchnummer: {t('fn')}</p>
            <p>Rechtsform: {t('rechtsform')}</p>
          </div>

          <div className="mt-8 pt-6 border-t border-mattone-cream">
            <h3 className="text-lg font-semibold text-mattone-brown mb-3">{t('bank_title')}</h3>
            <div className="space-y-1 text-mattone-text">
              <p>Bankinstitut: {t('bank_name')}</p>
              <p>BIC: {t('bic')}</p>
              <p>IBAN: {t('iban')}</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-mattone-cream">
            <h3 className="text-lg font-semibold text-mattone-brown mb-3">{t('offenlegung_title')}</h3>
            <div className="space-y-1 text-mattone-text">
              <p>Medieninhaber: {t('medieninhaber')}</p>
              <p>Firmensitz: {t('firmensitz')}</p>
              <p>Unternehmensgegenstand: {t('gegenstand')}</p>
              <p>Geschäftsführer: {t('geschaeftsfuehrer')}</p>
              <p>Blattlinie: {t('blattlinie')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
