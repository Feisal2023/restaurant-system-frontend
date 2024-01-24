import React, { useState } from "react";
import styles from "../auth.module.scss";
import { MdPassword } from "react-icons/md";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";
import closeEYE from "../../../assets/eye-close.png";
import openEYE from "../../../assets/eye-open.png";
const Reset = () => {
  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const password1Toggle = () => {
    setPassword1Visible(!password1Visible);
  };

  const password2Toggle = () => {
    setPassword2Visible(!password2Visible);
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
          <form>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <div className={styles["input-content"]}>
                <input
                  type={password1Visible ? "text" : "password"}
                  placeholder="New Password"
                  required
                  name="password1"
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                />
                <img
                  src={password1Visible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={password1Toggle}
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label>Confirm Password</label>
              <div className={styles["input-content"]}>
                <input
                  type={password2Visible ? "text" : "password"}
                  placeholder="Confirm New Password"
                  required
                  name="password2"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
                <img
                  src={password2Visible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={password2Toggle}
                />
              </div>
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
