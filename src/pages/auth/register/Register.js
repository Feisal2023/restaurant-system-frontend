import React, { useState } from "react";
import styles from "../auth.module.scss";
import Card from "../../../components/card/Card";
import { TiUserAddOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import closeEYE from "../../../assets/eye-close.png";
import openEYE from "../../../assets/eye-open.png";
const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cPasswordVisible, setCPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const passwordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };
  const cPasswordToggle = () => {
    setCPasswordVisible(!cPasswordVisible);
  };
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
          <form>
            <div className={styles["form-group"]}>
              <label>Name</label>
              <div className={styles["input-content"]}>
                <input type="text" placeholder="Name" required name="name" />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label>Email</label>
              <div className={styles["input-content"]}>
                <input type="email" placeholder="Email" required name="email" />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label>Phone Number</label>
              <div className={styles["input-content"]}>
                <input
                  type="number"
                  placeholder="Phone"
                  required
                  name="phone"
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <div className={styles["input-content"]}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <img
                  src={passwordVisible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={passwordToggle}
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label>Confirm Password</label>
              <div className={styles["input-content"]}>
                <input
                  type={cPasswordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  required
                  name="cPassword"
                  value={cPassword}
                  onChange={(e) => setCPassword(e.target.value)}
                />
                <img
                  src={cPasswordVisible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={cPasswordToggle}
                />
              </div>
            </div>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>
        </div>
      </Card>
      <div className={styles.links}>
        <span className={styles.register}>
          <p>&nbsp; Already have an account? &nbsp;</p>
          <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
