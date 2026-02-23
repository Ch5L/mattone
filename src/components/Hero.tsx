import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/theme/header-bg.jpg"
        alt="Mattone Apartments"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center">
        <p className="text-white/90 text-3xl md:text-5xl tracking-[0.3em] uppercase mb-8 font-light">
          {t('welcome')}
        </p>
        <Image
          src="/images/theme/logo_mattone_glow.png"
          alt="Mattone Apartments"
          width={450}
          height={180}
          className="mx-auto"
          priority
        />
      </div>
    </section>
  );
}
