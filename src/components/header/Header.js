import React, { useState } from "react";
import styles from "./header.module.scss";
import { IoRestaurant } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLinks/hiddenLinks";
import { useDispatch } from "react-redux";
import { RESET_AUTH, logoutUser } from "../../redux/features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrollPage, setScrollPage] = useState(false);
  const fixedNavbar = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };
  window.addEventListener("scroll", fixedNavbar);
  // logout User function
  const logout = async () => {
    dispatch(RESET_AUTH());
    await dispatch(logoutUser());
    window.location.reload();
    navigate("/users/login");
  };
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
          <ShowOnLogout>
            <button>
              <Link to="/users/login">Log In</Link>
            </button>
          </ShowOnLogout>
          <ShowOnLogin>
            <button>
              <Link to="/users/login" onClick={logout}>
                Log Out
              </Link>
            </button>
          </ShowOnLogin>
        </div>
      </div>
    </header>
  );
};

export default Header;
