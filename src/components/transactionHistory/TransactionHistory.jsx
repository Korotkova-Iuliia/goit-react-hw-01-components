import { TransactionItem } from '../transactionItem/TransactionItem';
export const TransactionHistory = ({ items }) => {
  return (
    <table>
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
