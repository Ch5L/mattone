'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact_form');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(t('email_subject'));
    const body = encodeURIComponent(
      `${t('field_name')}: ${form.name}\n` +
      `${t('field_email')}: ${form.email}\n` +
      (form.phone ? `${t('field_phone')}: ${form.phone}\n` : '') +
      `\n${form.message}`
    );
    window.location.href = `mailto:apartments@mattone.at?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-mattone-brown dark:text-mattone-cream mb-1">
          {t('field_name')} *
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-mattone-cream dark:border-[#3d3229] bg-white dark:bg-[#1a1410] text-mattone-text dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-mattone-gold/50 focus:border-mattone-gold transition-colors"
          placeholder={t('placeholder_name')}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-mattone-brown dark:text-mattone-cream mb-1">
          {t('field_email')} *
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-mattone-cream dark:border-[#3d3229] bg-white dark:bg-[#1a1410] text-mattone-text dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-mattone-gold/50 focus:border-mattone-gold transition-colors"
          placeholder={t('placeholder_email')}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-mattone-brown dark:text-mattone-cream mb-1">
          {t('field_phone')}
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-mattone-cream dark:border-[#3d3229] bg-white dark:bg-[#1a1410] text-mattone-text dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-mattone-gold/50 focus:border-mattone-gold transition-colors"
          placeholder={t('placeholder_phone')}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-mattone-brown dark:text-mattone-cream mb-1">
          {t('field_message')} *
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-mattone-cream dark:border-[#3d3229] bg-white dark:bg-[#1a1410] text-mattone-text dark:text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-mattone-gold/50 focus:border-mattone-gold transition-colors resize-none"
          placeholder={t('placeholder_message')}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-mattone-gold text-white py-3 rounded-lg font-medium hover:bg-mattone-brown transition-colors duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
      >
        {t('submit')}
      </button>
      <p className="text-xs text-mattone-text/50 dark:text-gray-500 text-center">
        {t('hint')}
      </p>
    </form>
  );
}
