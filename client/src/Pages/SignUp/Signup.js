import React, { useState, useEffect } from 'react';
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import img from "../../assets/images/signup.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signupUser } from '../../axios/instance';
import { useSelector } from "react-redux";
import ReactLoading from 'react-loading';

function Signup() {
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    });

    const [error, setError] = useState(""); // State for error message

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRegister = async () => {
        const { email, password, cpassword } = userData;

        // Improved regex for email validation
        const emailRegex = /^[a-zA-Z0-9]+(?:[._%±-][a-zA-Z0-9]+)*@[a-zA-Z]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            setError("⚠️ Please enter a valid email address");
            return;
        }
        if (password !== cpassword) {
            setError("⚠️ Passwords do not match");
            return;
        }
        if (password.length < 6) {
            setError("⚠️ Password must be at least 6 characters long");
            return;
        }

        setError("");
        setIsLoading(true);

        try {
            const res = await signupUser(userData);

            if (res.status === 400) {
                const serverError = res.data.error;

                // Check for duplicate email error
                if (serverError.includes("Email already exists")) {
                    setError("⚠️ This email is already registered. Please use a different email.");
                } else {
                    setError("⚠️ An error occurred during signup. Please try again.");
                }

                setIsLoading(false);
            } else if (res.status === 201) {
                setUserData({
                    name: "",
                    email: "",
                    password: "",
                    cpassword: ""
                });

                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setIsLoading(false);
                history.push("/signin");
            }
        } catch (error) {
            console.error(error);
            setError("⚠️ This email is already registered. Please use a different email.");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isAuthenticated) history.replace("/");
    }, [isAuthenticated, history]);

    return (
        <div className="signup">
            <ToastContainer />
            {error && (
                <div className="error-alert">
                    <span>{error}</span>
                </div>
            )}
            <div className="signup__wrapper">
                <div className="signup__left">
                    <div className="inputs">
                        <label> Full Name </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            autoComplete="off"
                            onChange={handleChange}
                            value={userData.name}
                            required
                        />
                    </div>

                    <div className="inputs">
                        <label> Email </label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            autoComplete="off"
                            onChange={handleChange}
                            value={userData.email}
                            required
                        />
                    </div>

                    <div className="inputs">
                        <label> Password </label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            required
                            onChange={handleChange}
                            value={userData.password}
                        />
                    </div>

                    <div className="inputs">
                        <label> Confirm Password </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="cpassword"
                            onChange={handleChange}
                            required
                            value={userData.cpassword}
                        />
                    </div>

                    <p>
                        Already have an account? <Link to="/signin">Login</Link>
                    </p>

                    {isLoading && (
                        <ReactLoading type={"balls"} color={"#ff1f5a"} height={20} width={20} />
                    )}
                    <button onClick={handleRegister}> SignUp </button>
                </div>

                <div className="signup__right">
                    <img src={img} alt="signup.jpeg" />

                    <div className="signup__content">
                        <h1> SignUp </h1>
                        <h4> Get your password secured with us for free. </h4>

                        <p>
                            Already have an account ?
                            <Link to="/signin"> Login </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
