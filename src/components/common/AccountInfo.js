import { Outlet } from "react-router-dom";

function AccountInfo({ name, accountNumber, accountType, balance }) {
    return (
        <>
            <div className='account-info'>
                <h1>{name}</h1>
                <div className='account-details'>
                    <p>Account Number: {accountNumber}</p>
                    <p>Account Type: {accountType}</p>
                    <p>Balance: ${balance}</p>
                </div>
            </div>
            <Outlet />
        </>
    );
}

export default AccountInfo;
