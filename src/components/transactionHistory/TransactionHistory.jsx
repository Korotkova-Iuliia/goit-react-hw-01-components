import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import { TransactionItem } from '../transactionItem/TransactionItem';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <TransactionItem key={item.id} item={item} />
      ))}
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
