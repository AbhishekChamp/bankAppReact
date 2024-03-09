import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setIsSignUp] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);
    const loginAttemptsRef = useRef(0);
    const loginButtonRef = useRef(null);

    const { signup, login } = useAuth();

    useEffect(() => {
        if (remainingTime === null) return;
        const intervalId = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [remainingTime]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSignUp) {
            try {
                await signup(email, password);
                toast.success("Sign up successful!");
            } catch (error) {
                console.log(error.message);
                if (
                    error.message ===
                    "Firebase: Error (auth/email-already-in-use)."
                ) {
                    toast.error("User already exists");
                } else {
                    toast.info("Password must be atleast 6 characters");
                }
            }
        } else {
            try {
                await login(email, password);
                toast.success("Log In successful");
            } catch (error) {
                console.log(error.message);
                toast.error("Invalid credentails");

                // Increase login attempts count
                loginAttemptsRef.current += 1;

                // If 3 failed attempts, disable login button for 5 minutes
                if (loginAttemptsRef.current === 3) {
                    loginButtonRef.current.disabled = true;
                    const endTime = Date.now() + 300000; // 5 minutes in milliseconds
                    const interval = setInterval(() => {
                        const remaining = endTime - Date.now();
                        if (remaining <= 0) {
                            clearInterval(interval);
                            loginButtonRef.current.disabled = false;
                            loginAttemptsRef.current = 0; // Reset login attempts count
                        } else {
                            setRemainingTime(Math.ceil(remaining / 1000));
                        }
                    }, 1000);
                }
            }
        }
    };

    return (
        <div className='form log-in'>
            <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='form-input'
                />
                <label>Password:</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='form-input'
                />
                <button
                    className='form-button'
                    type='submit'
                    ref={loginButtonRef}
                >
                    {isSignUp ? "Sign Up" : "Log In"}
                </button>
            </form>
            <p>
                {isSignUp ? "Already have an account?" : "Need an account?"}{" "}
                <button
                    className='form-button'
                    onClick={() => setIsSignUp(!isSignUp)}
                >
                    {isSignUp ? "Log In" : "Sign Up"}
                </button>
            </p>
            {remainingTime !== null && remainingTime >= 0 && (
                <div>Time remaining: {remainingTime} seconds</div>
            )}
        </div>
    );
};

export default LoginPage;
