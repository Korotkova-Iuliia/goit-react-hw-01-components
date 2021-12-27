import styles from './StatList.module.css';
export const StatList = ({ stats }) => {
  return (
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li key={id} className={styles.item}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};
