import TransactionHistory from "../components/common/TransactionHistory";
import AmountForm from "../components/forms/AmountForm";

function Withdraw({ dispatch, transactionHistory }) {
    const withdrawHistory = transactionHistory.filter(
        (transaction) => transaction.transactionType === "Withdraw",
    );
    return (
        <div>
            <AmountForm dispatch={dispatch} type='withdraw' />
            <TransactionHistory
                transactionHistory={withdrawHistory}
                flag='Withdraw'
            />
        </div>
    );
}

export default Withdraw;
