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
  return response.data.message;
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

const authService = {
  register,
  login,
};

export default authService;
