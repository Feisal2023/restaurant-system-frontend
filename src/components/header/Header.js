import React, { useState } from "react";
import styles from "./header.module.scss";
import { IoRestaurant } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollPage, setScrollPage] = useState(false);
  const fixedNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);
  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
      <div className={styles.header}>
        <div></div>
        <div className={styles.logo}>
          <IoRestaurant size={35} color="#FFA500" />
          <h3>Restaurant System</h3>
        </div>
        <div className={styles["empty-div"]}></div>
        <div className={styles["sign-In"]}>
          <button>
            <Link to="/login">Log In</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
