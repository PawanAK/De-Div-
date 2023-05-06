import React, { useState, useEffect, useRef } from "react";
export default function Hero({ transactions, setTransactions }) {
  console.log("hero section this is", transactions, setTransactions);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    // This effect will run only once when the component mounts.
    setIsFirstRender(false);
  }, []);
  const isMounted = useRef(false);
  console.log('isFirstRender', isFirstRender, 'transactions', transactions, 'setTransactions', setTransactions, 'transactions at hero');
  console.log(isMounted.current);
  
  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>To</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        {!isFirstRender &&
            transactions.map((tx) => (
              <tr key={tx.hash}>
                <td>{tx.to}</td>
                <td>{tx.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
