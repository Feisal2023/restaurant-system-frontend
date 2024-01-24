import React from "react";
import styles from "../auth.module.scss";
import Card from "../../../components/card/Card";
import { TiUserAddOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const Register = () => {
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
              <input type="text" placeholder="Name" required name="name" />
            </div>
            <div className={styles["form-group"]}>
              <label>Email</label>
              <input type="email" placeholder="Email" required name="email" />
            </div>
            <div className={styles["form-group"]}>
              <label>Phone Number</label>
              <input type="number" placeholder="Phone" required name="phone" />
            </div>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
              />
            </div>
            <div className={styles["form-group"]}>
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                name="cPassword"
              />
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
