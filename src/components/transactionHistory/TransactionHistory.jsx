import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import { TransactionItem } from '../transactionItem/TransactionItem';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableHead}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.transactionItem}>
        {items.map(item => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </tbody>
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
