import "./App.css";
import Header from "./header.jsx";
import Hero from "./hero.jsx";
import { useState } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);
  return (
    <>
      <Header
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <Hero
        transactions={transactions}
        setTransactions={setTransactions}
        className="hero"
      />
    </>
  );
}

export default App;
