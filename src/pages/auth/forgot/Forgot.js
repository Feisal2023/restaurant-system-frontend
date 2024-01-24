import styles from "../auth.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import Card from "../../../components/card/Card";
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <div className={styles["login-Symbol"]}>
        <div className="--flex-center">
          <AiOutlineMail size={35} color="#999" />
        </div>
        <h2>Forgot Password</h2>
      </div>
      <Card>
        <div className={styles.form}>
          <form>
            <div className={styles["form-group"]}>
              <label>Email</label>
              <div className={styles["input-content"]}>
                <input type="email" placeholder="Email" required name="email" />
              </div>
            </div>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
            </button>
            <div className={styles.links}>
              <p>
                <Link to="/">- Home</Link>
              </p>
              <p>
                <Link to="/login">- Login</Link>
              </p>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;
