import axios from "axios";

const BASE_URL = import.meta.env.VITE_USER_SERVICE;

export const getAllUsers = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getUserById = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const addUser = async (user: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await axios.post(BASE_URL, user);
  return res.data;
};

export const updateUser = async (
  id: number,
  user: { name: string; email: string }
) => {
  const res = await axios.put(`${BASE_URL}/${id}`, user);
  return res.data;
};

export const deleteUser = async (id: number) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
