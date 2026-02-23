import { useTranslations } from 'next-intl';

const leftColumn = [
  'therme', 'lebensmed', 'golf_foehrenwald', 'reitstall', 'med_austron',
  'bad_erlach', 'lanzenkirchen', 'bahnhof', 'billa', 'spar',
] as const;

const rightColumn = [
  'semmering', 'schneeberg', 'hohe_wand', 'rosalia',
  'autobahn_sued', 'autobahn_seebenstein',
] as const;

export default function Distances() {
  const t = useTranslations();

  return (
    <div>
      <h3 className="font-heading text-lg md:text-xl font-semibold text-mattone-brown mb-2">
        {t('home.distances_title')}
      </h3>
      <p className="text-mattone-gold font-medium mb-4 text-sm md:text-base text-left">{t('home.golf_note')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-2">
          {leftColumn.map((key) => (
            <div key={key} className="flex justify-between text-xs md:text-sm border-b border-mattone-cream pb-1 gap-2">
              <span className="text-mattone-brown font-medium">{t(`distances.${key}`)}</span>
              <span className="text-mattone-text shrink-0">{t(`distances.${key}_dist`)}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {rightColumn.map((key) => (
            <div key={key} className="flex justify-between text-xs md:text-sm border-b border-mattone-cream pb-1 gap-2">
              <span className="text-mattone-brown font-medium">{t(`distances.${key}`)}</span>
              <span className="text-mattone-text shrink-0">{t(`distances.${key}_dist`)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
