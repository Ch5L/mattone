'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const [isOpen, setIsOpen] = useState(false);
  const [apartmentsOpen, setApartmentsOpen] = useState(false);

  return (
    <header className="bg-mattone-dark/90 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between h-14 md:h-16">
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 -ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
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

          {/* Spacer to keep justify-between working */}
          <div className="w-[52px]" />
        </nav>

        {/* Mobile nav - slide down */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/" className="block text-white hover:text-mattone-gold py-2 px-2 rounded" onClick={() => setIsOpen(false)}>
                {t('home')}
              </Link>
            </li>
            <li>
              <button
                className="flex items-center justify-between w-full text-white hover:text-mattone-gold py-2 px-2 rounded"
                onClick={() => setApartmentsOpen(!apartmentsOpen)}
              >
                {t('apartments')}
                <svg className={`w-4 h-4 transition-transform duration-200 ${apartmentsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-200 ${apartmentsOpen ? 'max-h-48' : 'max-h-0'}`}>
                {(['typA', 'typB', 'typC', 'typD'] as const).map((typ) => (
                  <Link
                    key={typ}
                    href={`/apartments/${typ.replace('typ', 'typ-').toLowerCase()}`}
                    className="block text-white/80 hover:text-mattone-gold py-1.5 pl-6"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(typ)}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link href="/angebote" className="block text-white hover:text-mattone-gold py-2 px-2 rounded" onClick={() => setIsOpen(false)}>
                {t('offers')}
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="block text-white hover:text-mattone-gold py-2 px-2 rounded" onClick={() => setIsOpen(false)}>
                {t('contact')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Language switcher - fixed to viewport, independent of header layout */}
      <div className="fixed top-0 right-4 h-14 md:h-16 flex items-center z-50">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
