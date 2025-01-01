import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import img from "../../assets/images/login.jpeg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../axios/instance";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../redux/actions";

function Login() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      const res = await loginUser(userData);
  
      if (res.status === 400) {
        // Server-side specific error messages
        if (res.data.error === "Email does not exist") {
          toast.error("⚠️ Email not found. Please sign up first.", {
            position: "top-center",
            autoClose: 5000,
          });
        } else if (res.data.error === "Incorrect password") {
          toast.error("⚠️ Incorrect password. Try again.", {
            position: "top-center",
            autoClose: 5000,
          });
        } else {
          // Fallback for other errors
          toast.error("⚠️ Invalid login details.", {
            position: "top-center",
            autoClose: 5000,
          });
        }
      } else if (res.status === 200) {
        // Successful login
        dispatch(setAuth(true));
        toast.success("✅ Login Successful!", {
          position: "top-center",
          autoClose: 3000,
        });
        setTimeout(() => history.push("/"), 3000);
      }
    } catch (error) {
      // Catch block for network issues or unexpected errors
      console.error("Error during login:", error);
      toast.error("⚠️ Invalid login details. Please Try again", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };
  

  useEffect(() => {
    isAuthenticated && history.replace("/");
  }, [isAuthenticated, history]);

  return (
    <div className="login">
      <ToastContainer />
      <div className="login__wrapper">
        <div className="login_left">
          <div className="inputs">
            <label> Email </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          <div className="inputs">
            <label> Password </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </div>

          <p>
            Did not have any account? <Link to="/signup">Signup</Link>
          </p>

          <button onClick={handleLogin}> Login </button>
        </div>

        <div className="login_right">
          <img src={img} alt="login" />
          <div className="login__content">
            <h1> Login </h1>
            <h4> Get your password secured with us for free. </h4>
            <p>
              Did not have any Account? <Link to="/signup"> Signup </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
