import styles from './CountryDataSourcesList.module.scss';
import CountryDataSourceItem from '../CountryDataSourceItem/CountryDataSourceItem';

export default function CountryDataSourcesList({
  sourcesData, sourcesList, updateSourceName, populationCount,
}) {
  const sources = [];
  for (let i = 0; i < sourcesList.length; i += 1) {
    const source = sourcesList[i];
    if (!source.isCovidData) {
      continue;
    }
    sources.push(
      (<CountryDataSourceItem
        key={i}
        source={source}
        data={sourcesData[source.lowerName]}
        updateSourceName={updateSourceName}
        populationCount={populationCount}
      />),
    );
  }

  return (
    <div className={styles.data_list}>
      {sources}
    </div>
  );
}
