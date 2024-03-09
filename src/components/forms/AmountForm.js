import { useState } from "react";
import { toast } from "react-toastify";

function AmountForm({ dispatch, type, balance, numberOfLoans }) {
    const [amount, setAmount] = useState("");
    let category;
    if (type === "deposit") {
        category = "DEPOSIT";
    } else if (type === "withdraw") {
        category = "WITHDRAW";
    } else {
        category = "LOAN";
    }

    const handleAmount = async (e) => {
        e.preventDefault();

        if (amount.trim() === "") {
            toast.error("Amount cannot be empty!");
            return;
        }

        if (amount <= 0) {
            setAmount("");
            toast.error("Amount should be positive!");
            return;
        }

        if (category === "WITHDRAW") {
            if (amount > balance) {
                setAmount("");
                toast.error("Cannot withdraw amount greater than balance");
                return;
            }
        }

        if (category === "LOAN") {
            if (amount * 1.5 > balance) {
                setAmount("");
                toast.error(
                    "Loan amount should be less than 1.5 times the balance.",
                );
                return;
            }
            if (numberOfLoans > 2) {
                setAmount("");
                toast.error("Maximum of three loans allowed per user!");
                return;
            }
        }

        dispatch({
            type: category,
            payload: {
                amount: parseFloat(amount),
                date: new Date().toISOString().split("T")[0],
            },
        });

        toast.success(`${category.toLocaleLowerCase()} successful`);

        setAmount("");
    };

    return (
        <div className='form'>
            <h4>{`${category} form`.toLocaleUpperCase()}</h4>
            <form onSubmit={handleAmount}>
                <label>
                    <p className='form-text'>
                        Enter amount that you would like to {""}
                        {category === "LOAN"
                            ? `take ${category.toLocaleLowerCase()}`
                            : category.toLocaleLowerCase()}
                    </p>
                    <input
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className='form-input'
                    />
                </label>
                <button className='form-button' type='submit'>
                    {category}
                </button>
            </form>
        </div>
    );
}

export default AmountForm;
