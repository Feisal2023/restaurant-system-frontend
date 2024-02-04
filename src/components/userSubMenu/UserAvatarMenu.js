import React from "react";
import styles from "./UserAvatarMenu.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdAccountBalance, MdEmail } from "react-icons/md";
import { FaCcAmazonPay } from "react-icons/fa";
import { GiProfit } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import {
  RESET_AUTH,
  logoutUser,
  selectUser,
} from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const UserAvatarMenu = ({ isMenuAvatarActive, setIsMenuAvatarActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const email = user?.email;
  const handleAvatarMouseOver = () => {
    setIsMenuAvatarActive(true);
  };

  const handleAvatarMouseOut = () => {
    setIsMenuAvatarActive(false);
  };
  // logout User function
  const logout = async () => {
    dispatch(RESET_AUTH());
    await dispatch(logoutUser());
    navigate("/users/login");
  };
  return (
    <div className={styles.profile}>
      {/* Avatar */}
      <div className={`${styles.avatar} ${styles["avatar-profile"]}`}>
        <img src="https://i.ibb.co/4pDNDk1/avatar.png" alt="logo" />
      </div>
      {/* Menu  */}
      <div
        className={`${styles.menu} ${
          isMenuAvatarActive ? styles.menuActive : ""
        }`}
        onMouseOver={handleAvatarMouseOver}
        onMouseOut={handleAvatarMouseOut}
      >
        {/* Menu Body */}
        <div className={styles["menu-body"]}>
          <ul>
            <li>
              <Link to="#">
                <MdEmail size={15} />
                <h5>{email}</h5>
              </Link>
            </li>
            <li>
              <Link to="#">
                <CgProfile size={15} />
                <h5>Public profile</h5>
              </Link>
            </li>
            <li>
              <Link to="#">
                <MdAccountBalance size={15} />
                <h5>Accounts</h5>
              </Link>
            </li>
            <li>
              <Link to="#">
                <FaCcAmazonPay size={15} />
                <h5>Payout settings</h5>
              </Link>
            </li>
            <li>
              <Link to="#">
                <GiProfit size={15} />
                <h5>Revenue report</h5>
              </Link>
            </li>
            <li>
              <Link
                to="/users/login"
                className={styles["log-out"]}
                onClick={logout}
              >
                <FiLogOut size={15} />
                <h5>Log out</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserAvatarMenu;
