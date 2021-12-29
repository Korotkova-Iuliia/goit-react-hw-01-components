import PropTypes from 'prop-types';
import styles from '../profile/Profile.module.css';
export const ProfileDescription = ({
  user: { username, tag, location, avatar },
}) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="avatar" className={styles.avatar} height="140px" />
      <p className={styles.name}>{username}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};
ProfileDescription.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
};
