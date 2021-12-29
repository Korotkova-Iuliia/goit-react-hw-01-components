import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import { StatisticsList } from '../StatisticsList/StatisticList';
export const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <StatisticsList stats={stats} />
    </section>
  );
};
Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
Statistics.defaultProps = {
  title: 'Upload stats',
};
