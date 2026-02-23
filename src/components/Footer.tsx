import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-mattone-dark py-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <Image
          src="/images/theme/logo_mattone_small.png"
          alt="Mattone Apartments"
          width={150}
          height={50}
          className="mx-auto mb-6"
        />
        <nav className="flex justify-center gap-6 text-sm text-white/70">
          <Link href="/kontakt" className="hover:text-mattone-gold transition-colors">
            {t('contact')}
          </Link>
          <Link href="/impressum" className="hover:text-mattone-gold transition-colors">
            {t('impressum')}
          </Link>
          <a href="/docs/AGBH_061115.pdf" target="_blank" className="hover:text-mattone-gold transition-colors">
            {t('agb')}
          </a>
        </nav>
      </div>
    </footer>
  );
}
