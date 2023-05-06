import "./App.css";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
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
