function TransactionHistory({ flag, transactionHistory }) {
    return (
        <div className='transaction'>
            <h3 className='transaction-title'>
                {`${flag} history`.toLocaleUpperCase()} [
                {transactionHistory.length} in total]
            </h3>
            {transactionHistory.length < 1 ? (
                <p className='row'>No {flag} found in this account</p>
            ) : (
                <ul className='transaction-li'>
                    {transactionHistory?.map((transaction, index) => (
                        <li key={index} className='row'>
                            <span>AMOUNT - $ {transaction.amount}</span>
                            <span>TYPE - {transaction.transactionType}</span>
                            <span>DATE - {transaction.date}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TransactionHistory;
