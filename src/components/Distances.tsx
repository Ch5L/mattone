import { useTranslations } from 'next-intl';

const leftColumn = [
  'therme', 'lebensmed', 'golf_foehrenwald', 'reitstall', 'med_austron',
  'bad_erlach', 'lanzenkirchen', 'bahnhof', 'billa', 'spar',
] as const;

const rightColumn = [
  'semmering', 'schneeberg', 'hohe_wand', 'rosalia',
  'autobahn_sued', 'autobahn_seebenstein',
] as const;

const linkedItems: Record<string, string> = {
  lebensmed: 'lebensmed_url',
  therme: 'therme_url',
  golf_foehrenwald: 'golf_foehrenwald_url',
};

export default function Distances() {
  const t = useTranslations();

  const renderRow = (key: string) => {
    const url = linkedItems[key] ? t(`distances.${linkedItems[key]}`) : null;
    const label = url ? (
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-mattone-gold font-medium hover:text-mattone-brown transition-colors underline underline-offset-2">
        {t(`distances.${key}`)}
      </a>
    ) : (
      <span className="text-mattone-brown dark:text-gray-200 font-medium">{t(`distances.${key}`)}</span>
    );

    return (
      <div key={key} className="flex justify-between text-xs md:text-sm border-b border-mattone-cream dark:border-[#3d3229] pb-1 gap-2">
        {label}
        <span className="text-mattone-text dark:text-gray-400 shrink-0">{t(`distances.${key}_dist`)}</span>
      </div>
    );
  };

  return (
    <div>
      <h3 className="font-heading text-lg md:text-xl font-semibold text-mattone-brown dark:text-mattone-cream mb-2">
        {t('home.distances_title')}
      </h3>
      <p className="text-mattone-gold font-medium mb-4 text-sm md:text-base text-left">{t('home.golf_note')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-2">
          {leftColumn.map(renderRow)}
        </div>
        <div className="space-y-2">
          {rightColumn.map(renderRow)}
        </div>
      </div>
    </div>
  );
}
