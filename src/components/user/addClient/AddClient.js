import React from "react";
import Card from "../../addCusomerCard/Card";
import styles from "./addClient.module.scss";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { MdCategory, MdEmail } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
import { IoIosSave } from "react-icons/io";
const Categories = [
  {
    id: 1,
    name: "Debtor",
  },
  {
    id: 2,
    name: "Creditor",
  },
];
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
              <div className={styles["input-icon"]}>
                <FaUser size={20} />
              </div>
              <div className={styles.input}>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label>Email</label>
            <div className={styles["input-content"]}>
              <div className={styles["input-icon"]}>
                <MdEmail size={20} />
              </div>
              <div className={styles.input}>
                <input type="email" />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label>Phone</label>
            <div className={styles["input-content"]}>
              <div className={styles["input-icon"]}>
                <FaPhoneAlt size={20} />
              </div>
              <div className={styles.input}>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label>ID Number</label>
            <div className={styles["input-content"]}>
              <div className={styles["input-icon"]}>
                <HiIdentification size={20} />
              </div>
              <div className={styles.input}>
                <input type="number" />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            <label>Select Category</label>
            <div className={styles["input-content"]}>
              <div className={styles["input-icon"]}>
                <MdCategory size={20} />
              </div>
              <div className={styles.input}>
                <select>
                  <option>Select Category</option>
                  {Categories.map((Category) => {
                    const { _id, name } = Category;
                    return (
                      <option key={_id} value={name}>
                        {name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className={styles["submit"]}>
            <button>
              <IoIosSave size={15} />
              <span>Save</span>
            </button>
          </div>
        </form>
      </Card>
      ;
    </div>
  );
};

export default AddClient;
