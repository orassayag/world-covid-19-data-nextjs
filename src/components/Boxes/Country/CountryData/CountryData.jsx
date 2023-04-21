import styles from './CountryData.module.scss';
import CountrySource from '../CountrySource/CountrySource';

export default function CountryData({
  sourcesData, sourcesList, updateSourceName,
}) {
  const sources = [];
  for (let i = 0; i < sourcesList.length; i += 1) {
    const source = sourcesList[i];
    if (!source.isCovidData) {
      continue;
    }
    sources.push(
      (<CountrySource
        key={i}
        source={source}
        data={sourcesData[source.lowerName]}
        updateSourceName={updateSourceName}
      />),
    );
  }

  return (
    <div className={styles.data}>
      <div className={styles.sources}>
        {sources}
      </div>
    </div>
  );
}
