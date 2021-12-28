import styles from '../profile/Profile.module.css';
export const ProfileDescription = ({
  user: { username, tag, location, avatar },
}) => {
  console.log(avatar);
  return (
    <div className={styles.description}>
      <img src={avatar} alt="avatar" className={styles.avatar} height="140px" />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};
