'use client';

import { useTranslations } from 'next-intl';

export default function Reviews() {
  const t = useTranslations('reviews');

  const reviews = [0, 1, 2].map((i) => ({
    text: t(`items.${i}.text`),
    author: t(`items.${i}.author`),
    rating: t(`items.${i}.rating`),
  }));

  return (
    <div>
      {/* Rating badge */}
      <div className="flex flex-col items-center mb-8 md:mb-12">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="font-heading text-4xl md:text-5xl font-bold text-mattone-gold">{t('rating')}</span>
          <span className="text-mattone-text dark:text-gray-300 text-sm md:text-base">{t('rating_text')}</span>
        </div>
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-mattone-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-mattone-text/60 dark:text-gray-400 text-sm">{t('review_count')}</p>
      </div>

      {/* Review cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#2a231c] rounded-xl p-5 md:p-6 shadow-sm border border-mattone-cream/50 dark:border-[#3d3229] flex flex-col"
          >
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-4 h-4 text-mattone-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-mattone-text dark:text-gray-300 text-sm md:text-base leading-relaxed flex-1 italic">
              &ldquo;{review.text}&rdquo;
            </p>
            <p className="text-mattone-accent dark:text-mattone-gold/70 text-xs md:text-sm mt-3 font-medium">
              — {review.author}
            </p>
          </div>
        ))}
      </div>

      {/* CTA to Booking.com reviews */}
      <div className="text-center mt-6 md:mt-8">
        <a
          href="https://www.booking.com/reviews/at/hotel/mattone-apartments.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-mattone-gold hover:text-mattone-brown dark:hover:text-mattone-cream transition-colors text-sm underline underline-offset-2"
        >
          {t('cta')} →
        </a>
      </div>
    </div>
  );
}
