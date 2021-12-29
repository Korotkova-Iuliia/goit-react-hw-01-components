import { StatisticsList } from '../StatisticsList/StatisticList';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
export const Statistics = ({ stats, title }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <StatisticsList stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
  title: PropTypes.string.isRequired,
};
Statistics.defaultProps = {
  title: 'Upload stats',
};
