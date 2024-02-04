import React from "react";
import styles from "./UserSubMenu.module.scss";
import { Link } from "react-router-dom";
import { IoReceiptSharp } from "react-icons/io5";
import { FaReceipt } from "react-icons/fa";

const UserReceiptMenu = ({ isMenuReceiptActive, setIsMenuReceiptActive }) => {
  const handleReceiptMouseOver = () => {
    setIsMenuReceiptActive(true);
  };

  const handleReceiptMouseOut = () => {
    setIsMenuReceiptActive(false);
  };
  return (
    <div className={styles.profile}>
      {/* Menu  */}
      <div
        className={`${styles.menu} ${
          isMenuReceiptActive ? styles.menuActive : ""
        }`}
        onMouseOver={handleReceiptMouseOver}
        onMouseOut={handleReceiptMouseOut}
      >
        {/* Menu Body */}
        <div className={styles["menu-body"]}>
          <ul>
            <li>
              <Link to="#">
                <IoReceiptSharp size={15} />
                <h5>All Receipts</h5>
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaReceipt size={15} />
                <h5>Add New Receipt</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserReceiptMenu;
