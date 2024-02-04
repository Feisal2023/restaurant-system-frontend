import React from "react";
import styles from "./UserSubMenu.module.scss";
import { Link } from "react-router-dom";

import { FaUserPlus, FaUsers } from "react-icons/fa";

const UserExpenseMenu = ({ isMenuClientActive, setIsMenuClientActive }) => {
  const handleClientMouseOver = () => {
    setIsMenuClientActive(true);
  };

  const handleClientMouseOut = () => {
    setIsMenuClientActive(false);
  };
  return (
    <div className={styles.profile}>
      {/* Menu  */}
      <div
        className={`${styles.menu} ${
          isMenuClientActive ? styles.menuActive : ""
        }`}
        onMouseOver={handleClientMouseOver}
        onMouseOut={handleClientMouseOut}
      >
        {/* Menu Body */}
        <div className={styles["menu-body"]}>
          <ul>
            <li>
              <Link to="#">
                <FaUsers size={15} />
                <h5>All Clients</h5>
              </Link>
            </li>
            <li>
              <Link to="/users/user/add-client">
                <FaUserPlus size={15} />
                <h5>Add New Client</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserExpenseMenu;
