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

export const FrandListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};
