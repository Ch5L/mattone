import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-[75vh] md:h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/theme/header-bg.jpg"
        alt="Mattone Apartments"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center px-4">
        <p className="text-white/90 text-2xl md:text-5xl tracking-[0.2em] md:tracking-[0.3em] uppercase mb-6 md:mb-8 font-light">
          {t('welcome')}
        </p>
        <Image
          src="/images/theme/logo_mattone_glow.png"
          alt="Mattone Apartments"
          width={450}
          height={180}
          className="mx-auto w-[280px] md:w-[450px] h-auto"
          priority
        />
      </div>
    </section>
  );
}
