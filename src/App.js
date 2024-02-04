import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Forgot from "./pages/auth/forgot/Forgot";
import Reset from "./pages/auth/reset/Reset";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginStatus,
  getUser,
  selectIsLoggedIn,
  selectUser,
} from "./redux/features/auth/authSlice";
import axios from "axios";
import ChangePassword from "./pages/auth/changePassword/ChangePassword";
import UserNavbar from "./components/userNavbar/UserNavbar";
import User from "./pages/user/User";
function App() {
  axios.defaults.withCredentials = true;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  useEffect(() => {
    dispatch(getLoginStatus());
    console.log("Get Login Status App");
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn && user === null) {
      dispatch(getUser());
    }
  }, [dispatch, isLoggedIn, user]);
  return (
    <div className="App">
      {!isLoggedIn && <Header />}
      {isLoggedIn && <UserNavbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/users/login" />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/changepassword" element={<ChangePassword />} />
        <Route path="/users/forgot" element={<Forgot />} />
        <Route path="/users/resetpassword/:resetToken" element={<Reset />} />
        <Route
          path="/users/user/*"
          element={isLoggedIn ? <User /> : <Navigate to="/users/login" />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
