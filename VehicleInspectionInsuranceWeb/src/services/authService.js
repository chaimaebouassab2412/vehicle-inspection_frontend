import axios from "axios";

const API_URL = "http://localhost:2018/api/utilisateurs"; // Your backend base URL

// Signup Function
export const signup = async (nom, email, motDePasse) => {
  return await axios.post(`${API_URL}/register`, { nom, email, motDePasse });
};

// Login Function
export const login = async (email, motDePasse) => {
  return await axios.post(`${API_URL}/login`, { email, motDePasse });
};

// Logout Function
export const logout = async () => {
  return await axios.post(`${API_URL}/logout`);
};
