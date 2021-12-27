import { Statistics } from './components/statistics/Statistics';
import { Profile } from './components/profile/Profile';
import { FriendList } from './components/friendList/FriendList';
import { TransactionHistory } from './components/transactionHistory/TransactionHistory';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json';
import styles from './components/Global.module.css';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
