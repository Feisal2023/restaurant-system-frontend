import React from "react";
import styles from "./UserSubMenu.module.scss";
import { Link } from "react-router-dom";

import { FaDownload } from "react-icons/fa";
import { CgPassword } from "react-icons/cg";

const UserSettingMenu = ({ isMenuSettingActive, setIsMenuSettingActive }) => {
  const handleSettingMouseOver = () => {
    setIsMenuSettingActive(true);
  };

  const handleSettingMouseOut = () => {
    setIsMenuSettingActive(false);
  };
  return (
    <div className={styles.profile}>
      {/* Menu  */}
      <div
        className={`${styles.menu} ${
          isMenuSettingActive ? styles.menuActive : ""
        }`}
        onMouseOver={handleSettingMouseOver}
        onMouseOut={handleSettingMouseOut}
      >
        {/* Menu Body */}
        <div className={styles["menu-body"]}>
          <ul>
            <li>
              <Link to="/users/changepassword">
                <CgPassword size={15} />
                <h5>Change Password</h5>
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaDownload size={15} />
                <h5>Downloads</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSettingMenu;
