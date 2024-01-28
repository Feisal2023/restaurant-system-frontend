import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import Forgot from "./pages/auth/forgot/Forgot";
import Reset from "./pages/auth/reset/Reset";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Users from "./pages/users/Users";
function App() {
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
