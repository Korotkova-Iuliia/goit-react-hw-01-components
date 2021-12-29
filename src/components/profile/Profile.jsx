import styles from './Profile.module.css';
import { ProfileDescription } from '../profileDescription/ProfileDescription';
import { ProfileStats } from '../profileStats/ProfileStats';
import PropTypes from 'prop-types';
export const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <ProfileDescription user={user} />
      <ProfileStats user={user} />
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
