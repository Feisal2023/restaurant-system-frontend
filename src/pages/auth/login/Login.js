import React, { useState } from "react";
import styles from "../auth.module.scss";
import Card from "../../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import closeEYE from "../../../assets/eye-close.png";
import openEYE from "../../../assets/eye-open.png";
import { validateEmail } from "../../../utils";
const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [passwordCharacters, setPasswordCharacters] = useState(false);
  const [emailInValid, setEmailInValid] = useState(false);

  const passwordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    // validate in fields are empty
    if (!email) {
      return setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
    if (!password) {
      return setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
    // validate whether email is a valid email
    if (!validateEmail(email)) {
      return setEmailInValid(true);
    } else {
      setEmailInValid(false);
    }
    // validate if password characters are at least 8
    if (password.length < 8) {
      return setPasswordCharacters(true);
    } else {
      setPasswordCharacters(false);
    }
  };
  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles["login-Symbol"]}>
        <div className="--flex-center">
          <BiLogIn size={35} color="#999" />
        </div>
        <h2>Login</h2>
      </div>
      <Card>
        <div className={styles.form}>
          <form onSubmit={loginUser}>
            <div className={styles["form-group"]}>
              <label>Email</label>
              <div
                className={`${styles["input-content"]} ${
                  showEmailError || emailInValid ? "error" : ""
                }`}
              >
                <input
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <small
                className={
                  showEmailError
                    ? `${styles.showError}`
                    : `${styles.hideError}` || emailInValid
                    ? `${styles.showError}`
                    : `${styles.hideError}`
                }
              >
                {showEmailError
                  ? "Email is required"
                  : "" || emailInValid
                  ? "Please enter a valid email"
                  : ""}
              </small>
            </div>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <div
                className={`${styles["input-content"]} ${
                  showPasswordError || passwordCharacters ? "error" : ""
                }`}
              >
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  autoComplete="off"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
                <img
                  src={passwordVisible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={passwordToggle}
                />
              </div>
              <small
                className={
                  showPasswordError
                    ? `${styles.showError}`
                    : `${styles.hideError}` || passwordCharacters
                    ? `${styles.showError}`
                    : `${styles.hideError}`
                }
              >
                {showPasswordError
                  ? "Password is required"
                  : "" || passwordCharacters
                  ? "Password must be at least 8 characters"
                  : ""}
              </small>
            </div>
            <div className={styles.remember}>
              <input type="checkbox" />
              <p>Remember me</p>
            </div>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Login
            </button>
          </form>
        </div>
      </Card>
      <div className={styles.links}>
        <Link to="/users/forgot">Forgot Password?</Link>
        <span className={styles.register}>
          <p>&nbsp; Don't have an account? &nbsp;</p>
          <Link to="/users/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
