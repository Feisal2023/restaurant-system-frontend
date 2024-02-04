import React from "react";
import styles from "./UserSubMenu.module.scss";
import { Link } from "react-router-dom";

import { FaAmazonPay } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";

const UserExpenseMenu = ({ isMenuExpenseActive, setIsMenuExpenseActive }) => {
  const handleExpenseMouseOver = () => {
    setIsMenuExpenseActive(true);
  };

  const handleExpenseMouseOut = () => {
    setIsMenuExpenseActive(false);
  };
  return (
    <div className={styles.profile}>
      {/* Menu  */}
      <div
        className={`${styles.menu} ${
          isMenuExpenseActive ? styles.menuActive : ""
        }`}
        onMouseOver={handleExpenseMouseOver}
        onMouseOut={handleExpenseMouseOut}
      >
        {/* Menu Body */}
        <div className={styles["menu-body"]}>
          <ul>
            <li>
              <Link to="#">
                <GiExpense size={15} />
                <h5>All Expenses</h5>
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaAmazonPay size={15} />
                <h5>Add New Expense</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserExpenseMenu;
