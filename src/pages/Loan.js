import TransactionHistory from "../components/common/TransactionHistory";
import AmountForm from "../components/forms/AmountForm";

function Loan({ dispatch, transactionHistory, balance, numberOfLoans }) {
    const loanHistory = transactionHistory?.filter(
        (transaction) => transaction.transactionType === "Loan",
    );
    return (
        <div>
            <AmountForm
                dispatch={dispatch}
                type='loan'
                balance={balance}
                numberOfLoans={numberOfLoans}
            />
            <TransactionHistory transactionHistory={loanHistory} flag='Loan' />
        </div>
    );
}

export default Loan;
