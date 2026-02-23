'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mattone-dark dark:bg-[#0f0c09] py-10 md:py-14 relative">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-mattone-gold text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-mattone-brown transition-colors duration-300"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <Image
            src="/images/theme/logo_mattone_small.png"
            alt="Mattone Apartments"
            width={150}
            height={50}
            className="mx-auto mb-4 w-[100px] md:w-[150px] h-auto"
          />
          <p className="text-white/40 text-xs md:text-sm">
            Föhrenauerstraße 7 · 2821 Lanzenkirchen · Austria
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <nav className="flex gap-4 md:gap-6 text-xs md:text-sm text-white/60">
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
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Mattone GmbH
          </p>
        </div>
      </div>
    </footer>
  );
}
