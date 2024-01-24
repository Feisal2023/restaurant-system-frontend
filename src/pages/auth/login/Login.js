import React from "react";
import styles from "../auth.module.scss";
import Card from "../../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
const Login = () => {
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
          <form>
            <div className={styles["form-group"]}>
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                autoComplete="off"
                required
                name="email"
              />
            </div>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                required
                name="password"
              />
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
        <Link to="/forgot">Forgot Password?</Link>
        <span className={styles.register}>
          <p>&nbsp; Don't have an account? &nbsp;</p>
          <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
