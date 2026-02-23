'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [apartmentsOpen, setApartmentsOpen] = useState(false);

  return (
    <header className="bg-mattone-dark/90 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6 text-sm">
            <li>
              <Link href="/" className="text-white hover:text-mattone-gold transition-colors">
                {t('home')}
              </Link>
            </li>
            <li className="relative group">
              <button
                className="text-white hover:text-mattone-gold transition-colors flex items-center gap-1"
                onClick={() => setApartmentsOpen(!apartmentsOpen)}
              >
                {t('apartments')}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ul className="absolute top-full left-0 bg-mattone-dark/95 backdrop-blur-sm min-w-48 py-2 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {(['typA', 'typB', 'typC', 'typD'] as const).map((typ) => (
                  <li key={typ}>
                    <Link
                      href={`/apartments/${typ.replace('typ', 'typ-').toLowerCase()}`}
                      className="block px-4 py-2 text-white hover:text-mattone-gold hover:bg-white/5 transition-colors"
                    >
                      {t(typ)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/angebote" className="text-white hover:text-mattone-gold transition-colors">
                {t('offers')}
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="text-white hover:text-mattone-gold transition-colors">
                {t('contact')}
              </Link>
            </li>
          </ul>

          <LanguageSwitcher />
        </nav>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="block text-white hover:text-mattone-gold py-1" onClick={() => setIsOpen(false)}>
                  {t('home')}
                </Link>
              </li>
              {(['typA', 'typB', 'typC', 'typD'] as const).map((typ) => (
                <li key={typ}>
                  <Link
                    href={`/apartments/${typ.replace('typ', 'typ-').toLowerCase()}`}
                    className="block text-white/80 hover:text-mattone-gold py-1 pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(typ)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/angebote" className="block text-white hover:text-mattone-gold py-1" onClick={() => setIsOpen(false)}>
                  {t('offers')}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="block text-white hover:text-mattone-gold py-1" onClick={() => setIsOpen(false)}>
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
