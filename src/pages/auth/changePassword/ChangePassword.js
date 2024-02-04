import React, { useState } from "react";
import styles from "../auth.module.scss";
import Card from "../../../components/card/Card";
import closeEYE from "../../../assets/eye-close.png";
import openEYE from "../../../assets/eye-open.png";
import { CgPassword } from "react-icons/cg";

const initialState = {
  oldPassword: "",
  password1: "",
  password2: "",
};
const ChangePassword = () => {
  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password1, password2 } = formData;
  const oldPasswordToggle = () => {
    setOldPasswordVisible(!oldPasswordVisible);
  };

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

  const changePassword = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles["login-Symbol"]}>
        <div className="--flex-center">
          <CgPassword size={35} color="#999" />
        </div>
        <h2>Change Password</h2>
      </div>
      <Card>
        <div className={styles.form}>
          <form onSubmit={changePassword}>
            <div className={styles["form-group"]}>
              <label>Old Password</label>
              <div className={styles["input-content"]}>
                <input
                  type={oldPasswordVisible ? "text" : "password"}
                  placeholder="Old Password"
                  name="oldPassword"
                  value={oldPassword}
                  onChange={handleInputChange}
                />
                <img
                  src={oldPasswordVisible ? openEYE : closeEYE}
                  alt="close-eye"
                  className={styles["toggle-img"]}
                  onClick={oldPasswordToggle}
                />
              </div>
            </div>
            <div className={styles["form-group"]}>
              <label>New Password</label>
              <div className={styles["input-content"]}>
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
            </div>
            <div className={styles["form-group"]}>
              <label>Confirm Password</label>
              <div className={styles["input-content"]}>
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
            </div>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Change Password
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default ChangePassword;
