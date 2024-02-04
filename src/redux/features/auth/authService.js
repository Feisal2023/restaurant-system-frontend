import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users/`;

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData, {
    withCredentials: true,
  });
  return response.data;
};

// login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
};

// Forgot Password
export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post(API_URL + "forgotpassword", userData);
    return response.data.message;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return message;
  }
};
// Reset Password
export const resetPassword = async (userData, resetToken) => {
  try {
    const response = await axios.put(
      API_URL + `resetpassword/${resetToken}`,
      userData
    );
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return message;
  }
};

// get login status
const getLoginStatus = async () => {
  const response = await axios.get(API_URL + "getLoginStatus");
  return response.data;
};

//  get user
const getUser = async () => {
  const response = await axios.get(API_URL + "getUser");
  return response.data;
};

// logout user
const logoutUser = async () => {
  const response = await axios.get(API_URL + "logout");
  return response.data.message;
};
const authService = {
  register,
  login,
  getLoginStatus,
  getUser,
  logoutUser,
};

export default authService;
