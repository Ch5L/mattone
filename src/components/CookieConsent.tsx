'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function CookieConsent() {
  const t = useTranslations('cookies');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Small delay so it doesn't flash on load
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-mattone-cream p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm text-mattone-text">
          <p className="font-medium text-mattone-brown mb-1">{t('title')}</p>
          <p className="leading-relaxed">{t('text')}</p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-5 py-2 text-sm text-mattone-text border border-mattone-cream rounded-lg hover:bg-mattone-cream transition-colors"
          >
            {t('decline')}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm text-white bg-mattone-gold rounded-lg hover:bg-mattone-brown transition-colors shadow-sm"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
