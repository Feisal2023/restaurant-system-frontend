import React from "react";
import styles from "./UserNavbar.module.scss";
import UserAvatarMenu from "../userAvatarMenu/UserAvatarMenu";

const UserNavbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.createUser}>
        <button>Add New Client</button>
      </div>
      <div className={styles.dashboard}>
        <button>User Dashboard</button>
      </div>
      <div className={styles.profile}>
        <button>User Profile</button>
      </div>
      <div className={styles["user-profile-content"]}>
        <UserAvatarMenu className={styles.content} />
      </div>
    </div>
  );
};

export default UserNavbar;
