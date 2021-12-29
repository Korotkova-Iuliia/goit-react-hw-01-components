import PropTypes from 'prop-types';
import styles from '../friendList/FriendList.module.css';
export const FrandListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <li className={styles.item}>
      <span className={`${isOnline ? styles.status : styles.offline}`}></span>
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

FrandListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
