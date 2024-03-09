const initialState = {
    id: "1",
    name: "John Doe",
    accountNumber: "123456789",
    accountType: "Savings",
    balance: 15000,
    transactionHistory: [
        {
            transactionType: "Deposit",
            amount: 5000,
            date: "2024-03-04",
            transferredTo: null,
        },
        {
            transactionType: "Withdrawal",
            amount: 2000,
            date: "2024-03-03",
            transferredTo: null,
        },
        {
            transactionType: "Transfer",
            amount: 3000,
            date: "2024-03-01",
            transferredTo: "jane_doe",
        },
    ],
    numberOfLoans: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                transactionHistory: [
                    ...state.transactionHistory,
                    {
                        transactionType: "Deposit",
                        amount: action.payload.amount,
                        date: action.payload.date,
                        transferredTo: null,
                    },
                ],
            };
        case "WITHDRAW":
            return {
                ...state,
                balance: state.balance - action.payload.amount,
                transactionHistory: [
                    ...state.transactionHistory,
                    {
                        transactionType: "Withdraw",
                        amount: action.payload.amount,
                        date: action.payload.date,
                        transferredTo: null,
                    },
                ],
            };
        case "LOAN":
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                transactionHistory: [
                    ...state.transactionHistory,
                    {
                        transactionType: "Loan",
                        amount: action.payload.amount,
                        date: action.payload.date,
                        transferredTo: null,
                    },
                ],
                numberOfLoans: state.numberOfLoans++,
            };
        default:
            return state;
    }
};

export { initialState, reducer };
