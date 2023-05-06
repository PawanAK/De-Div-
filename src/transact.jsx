import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Transact.propTypes = {
//   defaultAccount: PropTypes.object.isRequired,
// };

function Transact({ defaultAccount, transactions, setTransactions }) {
  // const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (defaultAccount) {
      async function fetchTransactions() {
        const response = await fetch(
          `https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=${defaultAccount}&startblock=0&endblock=99999999&sort=asc&apikey=YDQMQW63QRBV2VSUQ9A4AV15N8VPPZ4I7Y`
        );
        const data = await response.json();
        setTransactions(data.result);
      }
      fetchTransactions();
    }
  }, [defaultAccount]);

  // console.log(transactions, "transactions at transact");
  return <div></div>;
}

export default Transact;
