import styles from "../auth.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { validateEmail } from "../../../utils";
const initialState = {
  email: "",
};
const Forgot = () => {
  const [formData, setFormData] = useState(initialState);
  const { email } = formData;
  const [showEmailError, setShowEmailError] = useState(false);
  const [emailInValid, setEmailInValid] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const forgot = (e) => {
    e.preventDefault();
    // confirm whether the email field is empty
    if (!email) {
      return setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }
    // validate Email
    if (!validateEmail(email)) {
      return setEmailInValid(true);
    } else {
      setEmailInValid(false);
    }
  };
  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles["login-Symbol"]}>
        <div className="--flex-center">
          <AiOutlineMail size={35} color="#999" />
        </div>
        <h2>Forgot Password</h2>
      </div>
      <Card>
        <div className={styles.form}>
          <form onSubmit={forgot}>
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
                  name="email"
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
            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
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

export default Forgot;
