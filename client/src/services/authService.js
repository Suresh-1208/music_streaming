import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const signupUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/`, userData);
  return response;
};

export const loginUser = async (loginData) => {
  const response = await axios.post(`${API_URL}/login/`, loginData);
  return response;
};
