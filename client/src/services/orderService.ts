// src/services/orderService.ts
const BASE_URL = import.meta.env.VITE_ORDER_SERVICE;

export const getAllOrders = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const getOrderById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
};

export const addOrder = async (data: {
  userId: number;
  productId: number;
  quantity: number;
}) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const updateOrder = async (id: number, quantity: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ quantity }),
  });
  return await res.json();
};

export const deleteOrder = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};
