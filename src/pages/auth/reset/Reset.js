import React, { useState } from "react";
import styles from "../auth.module.scss";
import { MdPassword } from "react-icons/md";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";

const Reset = () => {
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
          <form>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <input
                type="password"
                placeholder="New Password"
                required
                name="password"
              />
            </div>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Confirm New Password"
                required
                name="password2"
              />
            </div>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Reset;
