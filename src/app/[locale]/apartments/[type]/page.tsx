import { setRequestLocale } from 'next-intl/server';
import ApartmentContent from './ApartmentContent';

const validTypes = ['typ-a', 'typ-b', 'typ-c', 'typ-d'];

export function generateStaticParams() {
  return validTypes.map((type) => ({ type }));
}

export default async function ApartmentPage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale, type } = await params;
  setRequestLocale(locale);

  if (!validTypes.includes(type)) return null;

  return <ApartmentContent type={type} />;
}
