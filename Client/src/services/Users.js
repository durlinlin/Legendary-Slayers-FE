import api from "./apiConfig";
import jwtDecode from "jwt-decode";


/// routes are from Database

export const signUp = async (credentials) => {
  try {
    const resp = await api.post("/signUp", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) { 
    throw error;
  }
};

export const signIn = async (credentials) => {
  try {
    const resp = await api.post("/signIn", credentials);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    return error;
  }
};

export const verifyUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await api.get("/verify");
    return res.data;
  }
  return false;
};

export const changePassword = async (credentials, data) => {
  try {
    const resp = await api.put(`/changePassword/id/${credentials}`, data);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    localStorage.removeItem("token");
    return true;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const resp = await api.get("/users");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const getUser = async (id) => {
  try {
    const resp = await api.get(`/users/id/${id}`);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const getUsername = async (name) => {
  try {
    const resp = await api.get(`/users/username/${name}`);
    localStorage.setItem("token", resp.data.token);
    const user = jwtDecode(resp.data.token);
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (credentials, data) => {
  try {
    const resp = await api.put(`/users/id/${credentials}`, data);
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (credentials) => {
  try {
    const resp = await api.delete(`/users/id/${credentials}`);
    return resp.data;
  } catch (error) {
    throw error;
  }
};
