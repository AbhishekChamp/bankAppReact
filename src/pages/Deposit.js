import TransactionHistory from "../components/common/TransactionHistory";
import AmountForm from "../components/forms/AmountForm";

function Deposit({ dispatch, transactionHistory }) {
    const depositHistory = transactionHistory.filter(
        (transaction) => transaction.transactionType === "Deposit",
    );
    return (
        <div>
            <AmountForm dispatch={dispatch} type='deposit' />
            <TransactionHistory
                transactionHistory={depositHistory}
                flag='Deposit'
            />
        </div>
    );
}

export default Deposit;
