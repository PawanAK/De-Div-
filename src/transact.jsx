import React, { useState, useEffect } from "react";
import Web3 from "web3";

function Transact(props) {
  console.log(props);
  const [transactions, setTransactions] = useState([]);
  const address = props.defaultAccount;
  useEffect(() => {
    async function fetchTransactions() {
      const web3 = new Web3(
        "https://rpc-mumbai.maticvigil.com/v1/b7e1b6c3c43c40ee93814f8ceb78bdb7"
      );
      const txs = await web3.eth.getTransactions(address);
      setTransactions(txs);
    }
    fetchTransactions();
  }, []);

  return (
    <div>
      <h1>Transactions for {address}</h1>
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
