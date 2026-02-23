import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative h-[55vh] md:h-[65vh] min-h-[380px] -mt-14 md:-mt-16 flex items-center justify-center overflow-hidden">
      <Image
        src="/images/theme/header-bg.jpg"
        alt="Mattone Apartments"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      <div className="relative z-10 text-center px-4 pt-10 md:pt-12 animate-fade-in-up">
        <p className="text-white/90 font-heading text-3xl md:text-6xl tracking-[0.15em] md:tracking-[0.2em] uppercase mb-4 md:mb-8 font-light">
          {t('welcome')}
        </p>
        <Image
          src="/images/theme/logo_mattone_clean.png"
          alt="Mattone Apartments"
          width={434}
          height={358}
          className="mx-auto w-[220px] md:w-[450px] h-auto drop-shadow-lg"
          priority
        />
      </div>
    </section>
  );
}
