import styles from '../friendList/FriendList.module.css';
export const FrandListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={styles.item}>
      <span className={`${isOnline ? styles.isOnline : styles.status}`}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="70"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
