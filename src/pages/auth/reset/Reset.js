import React, { useState } from "react";
import styles from "../auth.module.scss";
import { MdPassword } from "react-icons/md";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";
import closeEYE from "../../../assets/eye-close.png";
import openEYE from "../../../assets/eye-open.png";

const initialState = {
  password1: "",
  password2: "",
};
const Reset = () => {
  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { password1, password2 } = formData;
  const [showPassword1Error, setShowPassword1Error] = useState(false);
  const [showPassword2Error, setShowPassword2Error] = useState(false);
  const [password1Characters, setPassword1Characters] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const password1Toggle = () => {
    setPassword1Visible(!password1Visible);
  };

  const password2Toggle = () => {
    setPassword2Visible(!password2Visible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetPassword = (e) => {
    e.preventDefault();
    // validate whether fields are empty
    if (!password1) {
      return setShowPassword1Error(true);
    } else {
      setShowPassword1Error(false);
    }
    if (!password2) {
      return setShowPassword2Error(true);
    } else {
      setShowPassword2Error(false);
    }

    // checking if new password is at least 8 characters
    if (password1.length < 8) {
      return setPassword1Characters(true);
    } else {
      setPassword1Characters(false);
    }
    // checking whether password 1 and 2 are same
    if (password1 !== password2) {
      return setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  };

  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles["login-Symbol"]}>
        <div className="--flex-center">
          <MdPassword size={35} color="#999" />
        </div>
        <h2>Reset Password</h2>
      </div>
      <Card>
        <div className={styles.form}>
          <form onSubmit={resetPassword}>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <div
                className={`${styles["input-content"]} ${
                  showPassword1Error || password1Characters ? "error" : ""
                } `}
              >
                <input
                  type={password1Visible ? "text" : "password"}
                  placeholder="New Password"
                  name="password1"
                  value={password1}
                  onChange={handleInputChange}
                />
                <img
                  src={password1Visible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={password1Toggle}
                />
              </div>
              <small
                className={
                  showPassword1Error
                    ? `${styles.showError}`
                    : `${styles.hideError}` || password1Characters
                    ? `${styles.showError}`
                    : `${styles.hideError}`
                }
              >
                {showPassword1Error
                  ? "Password is required"
                  : "" || password1Characters
                  ? "Password must be at least 8 characters"
                  : ""}
              </small>
            </div>
            <div className={styles["form-group"]}>
              <label>Confirm Password</label>
              <div
                className={`${styles["input-content"]} ${
                  showPassword2Error || passwordsMatch ? "error" : ""
                }`}
              >
                <input
                  type={password2Visible ? "text" : "password"}
                  placeholder="Confirm New Password"
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                />
                <img
                  src={password2Visible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={password2Toggle}
                />
              </div>
              <small
                className={
                  showPassword2Error
                    ? `${styles.showError}`
                    : `${styles.hideError}` || passwordsMatch
                    ? `${styles.showError}`
                    : `${styles.hideError}`
                }
              >
                {showPassword2Error
                  ? "Confirm Password is required"
                  : "" || passwordsMatch
                  ? "Passwords do not match."
                  : ""}
              </small>
            </div>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/users/login">- Home</Link>
              </p>
              <p>
                <Link to="/users/login">- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Reset;
