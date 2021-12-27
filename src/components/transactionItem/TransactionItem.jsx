export const TransactionItem = ({ item: { type, amount, currency } }) => {
  console.log(type);
  return (
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  );
};
