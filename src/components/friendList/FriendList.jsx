import { FrandListItem } from '../list/StatList';
export const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <FrandListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
