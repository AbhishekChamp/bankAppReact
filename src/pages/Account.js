import TransactionHistory from "../components/common/TransactionHistory";

function Account({ transactionHistory }) {
    return (
        <div>
            <TransactionHistory
                transactionHistory={transactionHistory}
                flag='Transaction'
            />
        </div>
    );
}

export default Account;
