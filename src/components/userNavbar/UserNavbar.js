import React, { useState } from "react";
import styles from "./UserNavbar.module.scss";
import UserAvatarMenu from "../userSubMenu/UserAvatarMenu";
import UserReceiptMenu from "../userSubMenu/UserReceiptMenu";
import { IoReceiptSharp, IoSearch, IoSettingsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdDashboard, MdOutlineArrowDropDown } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import UserExpenseMenu from "../userSubMenu/UserExpenseMenu";
import UserClientMenu from "../userSubMenu/UserClientMenu";
import UserSettingMenu from "../userSubMenu/UserSettingMenu";

const UserNavbar = () => {
  const [isMenuAvatarActive, setIsMenuAvatarActive] = useState(false);
  const [isMenuReceiptActive, setIsMenuReceiptActive] = useState(false);
  const [isMenuExpenseActive, setIsMenuExpenseActive] = useState(false);
  const [isMenuClientActive, setIsMenuClientActive] = useState(false);
  const [isMenuSettingActive, setIsMenuSettingActive] = useState(false);

  const [scrollPage, setScrollPage] = useState(false);
  const fixedNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);
  const handleAvatarMouseOver = () => {
    setIsMenuAvatarActive(true);
  };

  const handleAvatarMouseOut = () => {
    setIsMenuAvatarActive(false);
  };

  const handleReceiptMouseOver = () => {
    setIsMenuReceiptActive(true);
  };

  const handleReceiptMouseOut = () => {
    setIsMenuReceiptActive(false);
  };

  const handleExpenseMouseOver = () => {
    setIsMenuExpenseActive(true);
  };

  const handleExpenseMouseOut = () => {
    setIsMenuExpenseActive(false);
  };
  const handleClientMouseOver = () => {
    setIsMenuClientActive(true);
  };

  const handleClientMouseOut = () => {
    setIsMenuClientActive(false);
  };
  const handleSettingMouseOver = () => {
    setIsMenuSettingActive(true);
  };

  const handleSettingMouseOut = () => {
    setIsMenuSettingActive(false);
  };
  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
      <div className={styles.header}>
        <div className={styles.createUser}>
          <div className={styles["clients-content"]}>
            <FaUsers size={30} />
            <h4>Clients</h4>
            <MdOutlineArrowDropDown
              size={30}
              onMouseOver={handleClientMouseOver}
              onMouseOut={handleClientMouseOut}
            />
            <UserClientMenu
              isMenuClientActive={isMenuClientActive}
              setIsMenuClientActive={setIsMenuClientActive}
            />
          </div>
        </div>
        <div className={styles.dashboard}>
          <div className={styles["dashboard-content"]}>
            <MdDashboard size={30} />
            <h4>Dashboard</h4>
          </div>
        </div>
        <div className={styles.setting}>
          <div className={styles["setting-content"]}>
            <IoSettingsOutline size={30} />
            <h4>Settings</h4>
            <MdOutlineArrowDropDown
              size={30}
              onMouseOver={handleSettingMouseOver}
              onMouseOut={handleSettingMouseOut}
            />
            <UserSettingMenu
              isMenuSettingActive={isMenuSettingActive}
              setIsMenuSettingActive={setIsMenuSettingActive}
            />
          </div>
        </div>
        <div className={styles.expense}>
          <div className={styles["expense-content"]}>
            <GiExpense size={30} />
            <h4>Expenses</h4>
            <MdOutlineArrowDropDown
              size={30}
              onMouseOver={handleExpenseMouseOver}
              onMouseOut={handleExpenseMouseOut}
            />
            <UserExpenseMenu
              isMenuExpenseActive={isMenuExpenseActive}
              setIsMenuExpenseActive={setIsMenuExpenseActive}
            />
          </div>
        </div>
        <div className={styles.receipt}>
          <div className={styles["receipt-content"]}>
            <IoReceiptSharp size={30} />
            <h4>Receipts</h4>
            <MdOutlineArrowDropDown
              size={30}
              onMouseOver={handleReceiptMouseOver}
              onMouseOut={handleReceiptMouseOut}
            />
            <UserReceiptMenu
              isMenuReceiptActive={isMenuReceiptActive}
              setIsMenuReceiptActive={setIsMenuReceiptActive}
            />
          </div>
        </div>
        <div className={styles.search}>
          <IoSearch size={30} />
        </div>
        <div className={styles["user-profile-content"]}>
          <UserAvatarMenu
            className={styles.content}
            isMenuAvatarActive={isMenuAvatarActive}
            setIsMenuAvatarActive={setIsMenuAvatarActive}
          />
          <MdOutlineArrowDropDown
            size={30}
            onMouseOver={handleAvatarMouseOver}
            onMouseOut={handleAvatarMouseOut}
          />
        </div>
      </div>
    </header>
  );
};

export default UserNavbar;
