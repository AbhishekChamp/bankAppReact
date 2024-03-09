import { NavLink } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function Navbar() {
    const { currentUser, logout } = useAuth();
    console.log(currentUser);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error("Logout error", error.message);
        }
    };

    return (
        <nav>
            <ul className='nav-ul'>
                <li>
                    <NavLink to='/account'>Account</NavLink>
                </li>
                <li>
                    <NavLink to='/deposit'>Deposit</NavLink>
                </li>
                <li>
                    <NavLink to='/withdraw'>Withdraw</NavLink>
                </li>
                <li>
                    <NavLink to='/loan'>Take Loan</NavLink>
                </li>
                <button className='button' onClick={handleLogout}>
                    Log out
                </button>
            </ul>
        </nav>
    );
}

export default Navbar;
