import React, { useState, useEffect } from "react";
import MyModal from "./MyModel.jsx";

export default function Hero({ transactions }) {
  const [showTableHeaders, setShowTableHeaders] = useState(false);

  useEffect(() => {
    if (transactions.some((tx) => tx.value > 0)) {
      setShowTableHeaders(true);
    }
  }, [transactions]);

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
          {transactions
            .filter((tx) => tx.value > 0)
            .sort((a, b) => a.timestamp - b.timestamp)
            .map((tx) => (
              <tr key={tx.hash}>
                <td>{tx.to}</td>
                <td>{(tx.value / 1000000000000000000).toFixed(8)}</td>
                <td>
                  <MyModal
                    value={(tx.value / 1000000000000000000).toFixed(8)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
