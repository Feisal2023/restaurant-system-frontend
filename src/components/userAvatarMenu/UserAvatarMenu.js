import React from "react";
import styles from "./UserAvatarMenu.module.scss";
const UserAvatarMenu = () => {
  return (
    <div className={styles.profile}>
      {/* Avatar */}
      <div className={`${styles.avatar} ${styles["avatar-profile"]}`}>
        <img src="https://i.ibb.co/4pDNDk1/avatar.png" alt="logo image" />
      </div>
    </div>
  );
};

export default UserAvatarMenu;
