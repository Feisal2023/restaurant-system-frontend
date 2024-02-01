import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Forgot from "./pages/auth/forgot/Forgot";
import Reset from "./pages/auth/reset/Reset";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Users from "./pages/users/Users";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLoginStatus,
  getUser,
  selectIsLoggedIn,
  selectUser,
} from "./redux/features/auth/authSlice";
import axios from "axios";
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
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/users/login" />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
        <Route path="/users/forgot" element={<Forgot />} />
        <Route path="/users/resetpassword/:resetToken" element={<Reset />} />
        <Route path="/users/user/home" element={<Users />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
