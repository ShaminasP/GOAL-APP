import axios from "axios";

const API_URL = "http://localhost:8000/api/users/";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login
const login = async (userData) => {
  const response = await axios.post(API_URL+'login', userData, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
