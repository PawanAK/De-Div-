import "./App.css";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
<<<<<<< HEAD
  console.log(
    "transactions at app",
    transactions,
    "setTransactions at app",
    setTransactions,
    "transactions at app"
  );

=======
  // console.log('transactions at app', transactions, 'setTransactions at app', setTransactions, 'transactions at app');
  
>>>>>>> 907320f8c8370d630af105490205178e104aa391
  return (
    <>
      <div className="header">
        <Header transactions={transactions} setTransactions={setTransactions} />
      </div>
      <div className="hero">
        <Hero transactions={transactions} setTransactions={setTransactions} />
      </div>
    </>
  );
}

export default App;
