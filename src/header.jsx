import Metamask from "./metamask";

export default function Header({ transactions, setTransactions }) {
    // console.log('transactions at header', transactions, 'setTransactions at header', setTransactions);
    
    return (
        <>
            <Metamask transactions={transactions} setTransactions={setTransactions} />
        </>

    )
}