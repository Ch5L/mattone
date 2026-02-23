import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/theme/header-bg.jpg"
        alt="Mattone Apartments"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center">
        <p className="text-white/90 text-xl md:text-2xl tracking-[0.3em] uppercase mb-6">
          {t('welcome')}
        </p>
        <Image
          src="/images/theme/logo_mattone_glow.png"
          alt="Mattone Apartments"
          width={300}
          height={120}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );
}
