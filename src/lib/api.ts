import axios from "axios";
import { BACKEND_URL } from "./global";

const api = axios.create({
  baseURL: `${BACKEND_URL}/auth`,
  withCredentials: true,
});

export const register = async (
  email: string,
  password: string,
  name: string
) => {
  const res = await api.post("/register", { email, password, name });
  return res.data;
};

export const verifyEmail = async (token: string) => {
  const res = await api.get(`/verify-email?token=${token}`);
  return res.data;
};

export const forgotPassword = async (email: string) => {
  const res = await api.post("/forgot-password", { email });
  return res.data;
};

export const resetPassword = async (token: string, password: string) => {
  const res = await api.post("/reset-password", { token, password });
  return res.data;
};

export const login = async (email: string, password: string) => {
  const res = await api.post("/login", { email, password });
  return res.data;
};

export const logout = async () => {
  const res = await api.post("/logout");
  return res.data;
};
