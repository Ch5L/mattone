import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return {
    title: {
      default: t('title'),
      template: `%s | ${t('title')}`,
    },
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/images/theme/header-bg.jpg',
          width: 1600,
          height: 1088,
          alt: 'Mattone Apartments',
        },
      ],
      locale: locale === 'de' ? 'de_AT' : 'en_US',
      type: 'website',
      siteName: 'Mattone Apartments',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/theme/header-bg.jpg'],
    },
  };
}

// Schema.org LodgingBusiness structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Mattone Apartments',
  description: 'Furnished apartments near Therme Linsberg Asia in Lanzenkirchen, Lower Austria. 14 premium apartments from 40-85m².',
  url: 'https://mattone-apartments.vercel.app',
  telephone: '+43262746428',
  email: 'apartments@mattone.at',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Föhrenauerstraße 7',
    addressLocality: 'Lanzenkirchen',
    postalCode: '2821',
    addressRegion: 'Lower Austria',
    addressCountry: 'AT',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.73779,
    longitude: 16.20902,
  },
  image: 'https://mattone-apartments.vercel.app/images/theme/header-bg.jpg',
  numberOfRooms: 14,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Kitchen', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Breakfast Included', value: true },
  ],
  sameAs: [
    'https://www.booking.com/hotel/at/mattone-apartments.html',
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-mattone-light text-mattone-text font-sans antialiased">
        <NextIntlClientProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
