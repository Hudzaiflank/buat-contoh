import axios from "axios";

const BASE_URL = import.meta.env.VITE_PRODUCT_SERVICE;

export const getAllProducts = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export const getProductById = async (id: number) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data;
};

export const addProduct = async (product: {
  name: string;
  type: string;
  location: string;
  status: string;
  description: string;
}) => {
  const res = await axios.post(BASE_URL, product);
  return res.data;
};

export const updateProduct = async (
  id: number,
  product: {
    name: string;
    type: string;
    location: string;
    status: string;
    description: string;
  }
) => {
  const res = await axios.put(`${BASE_URL}/${id}`, product);
  return res.data;
};

export const deleteProduct = async (id: number) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
