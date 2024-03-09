import { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./app.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Account from "./pages/Account";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Login from "./pages/Login";
import Loan from "./pages/Loan";
import PageNotFound from "./pages/PageNotFound";
import { initialState, reducer } from "./appReducer";
import AccountInfo from "./components/common/AccountInfo";
import { useAuth } from "./AuthContext";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {
        name,
        accountNumber,
        accountType,
        numberOfLoans,
        transactionHistory,
        balance,
    } = state;

    const { currentUser } = useAuth();

    if (!currentUser) {
        return (
            <div className='login-page'>
                <Login />
                <ToastContainer position='top-center' />
            </div>
        );
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path='/'
                        element={
                            <AccountInfo
                                name={name}
                                accountNumber={accountNumber}
                                accountType={accountType}
                                balance={balance}
                            />
                        }
                    >
                        <Route
                            path='/account'
                            element={
                                <Account
                                    transactionHistory={transactionHistory}
                                />
                            }
                        />
                        <Route
                            path='deposit'
                            element={
                                <Deposit
                                    dispatch={dispatch}
                                    transactionHistory={transactionHistory}
                                />
                            }
                        />
                        <Route
                            path='withdraw'
                            element={
                                <Withdraw
                                    dispatch={dispatch}
                                    transactionHistory={transactionHistory}
                                />
                            }
                        />
                        <Route
                            path='loan'
                            element={
                                <Loan
                                    dispatch={dispatch}
                                    balance={balance}
                                    numberOfLoans={numberOfLoans}
                                    transactionHistory={transactionHistory}
                                />
                            }
                        />
                    </Route>
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
                <Footer />
                <ToastContainer position='top-center' />
            </BrowserRouter>
        </>
    );
}
export default App;
