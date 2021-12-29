import styles from '../statistics/Statistics.module.css';
import { getRandomHexColor } from '../helpers/RandomColor';
export const StatisticsList = ({ stats }) => {
  return (
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            key={id}
            className={styles.item}
            style={{ backgroundColor: `${getRandomHexColor()} ` }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};
