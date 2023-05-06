import React, { useState, useEffect } from "react";
import MyModal from "./MyModel.jsx";

export default function Hero({ transactions, setTransactions }) {
  console.log("hero section this is", transactions, setTransactions);

  const [showTableHeaders, setShowTableHeaders] = useState(false);

  useEffect(() => {
    // This effect will run only once when the component mounts.
    if (transactions.length > 0) {
      setShowTableHeaders(true);
    }
  }, [transactions]);

  console.log(
    "showTableHeaders",
    showTableHeaders,
    "transactions",
    transactions,
    "setTransactions",
    setTransactions,
    "transactions at hero"
  );
  console.log(typeof MyModal, "asdfasfasfdasfasdf");

  return (
    <>
      <table>
        <thead>
          {showTableHeaders && (
            <tr>
              <th>To</th>
              <th>Value</th>
            </tr>
          )}
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.hash}>
              <td>{tx.to}</td>
              <td>{(tx.value / 1000000000000000000).toFixed(6)}</td>
              <td>
                <MyModal value={(tx.value / 1000000000000000000).toFixed(6)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
