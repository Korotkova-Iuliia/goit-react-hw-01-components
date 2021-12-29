import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import { ProfileDescription } from '../profileDescription/ProfileDescription';
import { ProfileStats } from '../profileStats/ProfileStats';
export const Profile = ({ user }) => {
  return (
    <div className={styles.profile}>
      <ProfileDescription user={user} />
      <ProfileStats user={user} />
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.object.isRequired,
};
