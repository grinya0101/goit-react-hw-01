// id, type, amount, currency

export const TransactionHistory = ({ transactions }) => {
  return (
    <>
      {transactions.map(({ id, type, amount, currency }) => (
        <table key={id} class="transaction-history">
          <thead>
            <tr>
              <th>{type}</th>
              <th>{amount}</th>
              <th>{currency}</th>
            </tr>
          </thead>
        </table>
      ))}
    </>
  );
};
