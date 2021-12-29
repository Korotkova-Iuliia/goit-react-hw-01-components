import PropTypes from 'prop-types';
import styles from '../transactionHistory/TransactionHistory.module.css';
export const TransactionItem = ({ item: { type, amount, currency } }) => {
  return (
    <tbody className={styles.transactionItem}>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};
TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
