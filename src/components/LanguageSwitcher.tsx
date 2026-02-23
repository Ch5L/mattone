'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');

  const switchLocale = () => {
    const newLocale = locale === 'de' ? 'en' : 'de';
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="text-white/80 hover:text-mattone-gold text-sm border border-white/30 rounded px-3 py-1 hover:border-mattone-gold transition-colors"
      aria-label={t('switch')}
    >
      {locale === 'de' ? 'EN' : 'DE'}
    </button>
  );
}
