import styles from './StatisticsSummarySources.module.scss';
import StatisticsSummaryItem from '../StatisticsSummaryItem/StatisticsSummaryItem';
import StatisticsSummaryItemTotal from '../StatisticsSummaryItemTotal/StatisticsSummaryItemTotal';

export default function StatisticsSummarySources() {
  return (
    <div className={styles.statistics_sources}>
      <StatisticsSummaryItem
        sourceName="POP1"
        sourceStatusIconName="check-circle"
        isPopulation
      />
      <StatisticsSummaryItem
        sourceName="POP2"
        sourceStatusIconName="check-circle"
        isPopulation
      />
      <StatisticsSummaryItem
        sourceName="GOO"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="WOD"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="CVA"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="COA"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="WIK"
        sourceStatusIconName="exclamation-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="CAC"
        sourceStatusIconName="check-circle"
        isPopulation={false}
      />
      <StatisticsSummaryItem
        sourceName="CVS"
        sourceStatusIconName="check-circle"
        sourceNameClass=""
      />
      <StatisticsSummaryItem
        sourceName="CLN"
        sourceStatusIconName="dot-circle"
        sourceNameClass=""
      />
      <StatisticsSummaryItemTotal />
    </div>
  );
}
