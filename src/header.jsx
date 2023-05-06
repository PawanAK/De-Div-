import Metamask from "./metamask";

export default function Header({ transactions, setTransactions}) {
    // console.log('transactions at header', transactions, 'setTransactions at header', setTransactions);
    
    return (
        <div className="header">
            <Metamask transactions={transactions} setTransactions={setTransactions}/>
        </div>

    )
}