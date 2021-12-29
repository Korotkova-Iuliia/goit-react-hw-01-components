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
