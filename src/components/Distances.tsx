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
      <h3 className="text-lg font-semibold text-mattone-brown mb-2">
        {t('home.distances_title')}
      </h3>
      <p className="text-mattone-gold font-medium mb-4">{t('home.golf_note')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          {leftColumn.map((key) => (
            <div key={key} className="flex justify-between text-sm border-b border-mattone-cream pb-1">
              <span className="text-mattone-brown font-medium">{t(`distances.${key}`)}</span>
              <span className="text-mattone-text">{t(`distances.${key}_dist`)}</span>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {rightColumn.map((key) => (
            <div key={key} className="flex justify-between text-sm border-b border-mattone-cream pb-1">
              <span className="text-mattone-brown font-medium">{t(`distances.${key}`)}</span>
              <span className="text-mattone-text">{t(`distances.${key}_dist`)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
