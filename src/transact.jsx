import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Transact.propTypes = {
//   defaultAccount: PropTypes.object.isRequired,
// };


function Transact({ defaultAccount, transactions, setTransactions } ) {
  // const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (defaultAccount) {
      async function fetchTransactions() {
        const response = await fetch(
          `https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=${defaultAccount}&startblock=0&endblock=99999999&sort=asc&apikey=<YOUR_API_KEY>`
        );
        const data = await response.json();
        setTransactions(data.result);
      }
      fetchTransactions();
    }
  }, [defaultAccount]);

  console.log(transactions, "transactions at transact");
  return (
    <div>
      <h1>Transactions for {defaultAccount}</h1>
      <table>
        <thead>
          <tr>
            <th>Hash</th>
            <th>From</th>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.hash}>
              <td>{tx.hash}</td>
              <td>{tx.from}</td>
              <td>{tx.to}</td>
              <td>{tx.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transact;
