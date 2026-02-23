import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function BookingCTA() {
  const t = useTranslations('booking_cta');

  return (
    <div className="text-center">
      <Link
        href="/kontakt"
        className="inline-block bg-mattone-gold text-white px-8 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-mattone-brown transition-colors duration-300 shadow-md hover:shadow-lg"
      >
        {t('direct')} →
      </Link>
      <p className="text-mattone-text/50 dark:text-gray-500 text-xs mt-2">{t('best_price')}</p>
      <div className="mt-4">
        <span className="text-mattone-text/40 dark:text-gray-600 text-xs">{t('or')}</span>
        <a
          href="https://www.booking.com/hotel/at/mattone-apartments.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mattone-gold/70 hover:text-mattone-gold transition-colors text-xs underline underline-offset-2 ml-1"
        >
          {t('booking')} →
        </a>
      </div>
    </div>
  );
}
