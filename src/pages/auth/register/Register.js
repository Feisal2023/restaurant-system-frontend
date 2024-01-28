import React, { useEffect, useState } from "react";
import styles from "../auth.module.scss";
import Card from "../../../components/card/Card";
import { TiUserAddOutline } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import closeEYE from "../../../assets/eye-close.png";
import openEYE from "../../../assets/eye-open.png";
import { validateEmail } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET_AUTH,
  register,
  // selectUser,
} from "../../../redux/features/auth/authSlice";
const initialState = {
  name: "",
  email: "",
  phone: "",
  password: "",
  cPassword: "",
};
const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, phone, password, cPassword } = formData;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cPasswordVisible, setCPasswordVisible] = useState(false);
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showCPasswordError, setShowCPasswordError] = useState(false);
  const [emailInValid, setEmailInValid] = useState(false);
  const [phoneDigits, setPhoneDigits] = useState(false);
  const [passwordCharacters, setPasswordCharacters] = useState(false);
  const [passwordsMatch, setPasswordMatch] = useState(false);
  const { isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.auth
  );
  const [emailAlreadyRegistered, setEmailAlreadyRegistered] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector(selectUser);
  // const userEmail = user?.email;
  // console.log(userEmail);
  const passwordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const cPasswordToggle = () => {
    setCPasswordVisible(!cPasswordVisible);
  };
  // handle input change function
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // register user function
  const registerUser = async (e) => {
    e.preventDefault();
    // check if fields are empty
    if (!name) {
      return setShowNameError(true);
    } else {
      setShowNameError(false);
    }
    if (!email) {
      return setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
    if (!phone) {
      return setShowPhoneError(true);
    } else {
      setShowPhoneError(false);
    }
    if (!password) {
      return setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
    if (!cPassword) {
      return setShowCPasswordError(true);
    } else {
      setShowCPasswordError(false);
    }
    // validate Email
    if (!validateEmail(email)) {
      return setEmailInValid(true);
    } else {
      setEmailInValid(false);
    }
    // validate phone Number Digits
    if (phone.length < 10) {
      return setPhoneDigits(true);
    } else {
      setPhoneDigits(false);
    }
    // validate if password characters are at least 8
    if (password.length < 8) {
      return setPasswordCharacters(true);
    } else {
      setPasswordCharacters(false);
    }
    // confirm whether password and confirm password matches
    if (password !== cPassword) {
      return setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }

    const userData = {
      name,
      email,
      phone,
      password,
    };
    // console.log(userData);
    await dispatch(register(userData));
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/users/login");
    }

    setFormData(initialState);
    dispatch(RESET_AUTH());
  }, [isSuccess, dispatch, navigate]);
  useEffect(() => {
    // validate if the user already exist
    if (message === "Email has already been registered") {
      return setEmailAlreadyRegistered(true);
    } else {
      setEmailAlreadyRegistered(false);
    }
  }, [message]);
  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles["login-Symbol"]}>
        <div className="--flex-center">
          <TiUserAddOutline size={35} color="#999" />
        </div>
        <h2>Register</h2>
      </div>
      <Card>
        <div className={styles.form}>
          <form onSubmit={registerUser}>
            <div className={styles["form-group"]}>
              <label>Name</label>
              <div
                className={`${styles["input-content"]} ${
                  showNameError ? "error" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                />
              </div>
              <small
                className={
                  showNameError ? `${styles.showError}` : `${styles.hideError}`
                }
              >
                Name is required
              </small>
            </div>
            <div className={styles["form-group"]}>
              <label>Email</label>
              <div
                className={`${styles["input-content"]} ${
                  showEmailError || emailInValid || emailAlreadyRegistered
                    ? "error"
                    : ""
                }`}
              >
                <input
                  type="email"
                  placeholder="Email"
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
                    : `${styles.hideError}` || emailAlreadyRegistered
                    ? `${styles.showError}`
                    : `${styles.hideError}`
                }
              >
                {showEmailError
                  ? "Email is required"
                  : "" || emailInValid
                  ? "Please enter a valid email"
                  : "" || emailAlreadyRegistered
                  ? "User with this Email has already been registered"
                  : ""}
              </small>
            </div>
            <div className={styles["form-group"]}>
              <label>Phone Number</label>
              <div
                className={`${styles["input-content"]} ${
                  showPhoneError || phoneDigits ? "error" : ""
                }`}
              >
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  onChange={handleInputChange}
                />
              </div>
              <small
                className={
                  showPhoneError
                    ? `${styles.showError}`
                    : `${styles.hideError}` || phoneDigits
                    ? `${styles.showError}`
                    : `${styles.hideError}`
                }
              >
                {showPhoneError
                  ? "Phone Number is required"
                  : "" || phoneDigits
                  ? "Phone Number must be at least 10 digits"
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
            <div className={styles["form-group"]}>
              <label>Confirm Password</label>
              <div
                className={`${styles["input-content"]} ${
                  showCPasswordError || passwordsMatch ? "error" : ""
                }`}
              >
                <input
                  type={cPasswordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="cPassword"
                  value={cPassword}
                  onChange={handleInputChange}
                />
                <img
                  src={cPasswordVisible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={cPasswordToggle}
                />
              </div>
              <small
                className={
                  showCPasswordError
                    ? `${styles.showError}`
                    : `${styles.hideError}` || passwordsMatch
                    ? `${styles.showError}`
                    : `${styles.hideError}`
                }
              >
                {showCPasswordError
                  ? "Confirm Password is required"
                  : "" || passwordsMatch
                  ? "Passwords do not match."
                  : ""}
              </small>
            </div>
            <button type="submit" className="--btn --btn-primary --btn-block">
              {isLoading ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </Card>
      <div className={styles.links}>
        <span className={styles.register}>
          <p>&nbsp; Already have an account? &nbsp;</p>
          <Link to="/users/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
