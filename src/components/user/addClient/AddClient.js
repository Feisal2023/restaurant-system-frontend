import React from "react";
import Card from "../../addCusomerCard/Card";
import styles from "./addClient.module.scss";
import { FaUser } from "react-icons/fa";

const AddClient = () => {
  return (
    <div className={styles["add-client"]}>
      <Card>
        <h4>New Client</h4>
        <hr />
        <form>
          <div className={styles["form-group"]}>
            <label>Name</label>
            <div className={styles["input-content"]}>
              <FaUser />
              <input type="text" />
            </div>
          </div>
        </form>
      </Card>
      ;
    </div>
  );
};

export default AddClient;
