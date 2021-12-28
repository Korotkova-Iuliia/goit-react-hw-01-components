import { FrandListItem } from '../frandListItem/FrandListItem';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FrandListItem key={friend.id} friend={friend} />
      ))}
    </ul>
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
