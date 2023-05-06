import React, { useState, useEffect } from "react";

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
              <td>{(parseFloat(tx.value) / 10**18).toFixed(18)}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
