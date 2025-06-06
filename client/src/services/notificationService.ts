// src/services/notificationService.ts
const BASE_URL = import.meta.env.VITE_NOTIFICATION_SERVICE;

export const getAllNotifications = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const getNotificationById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return await res.json();
};

export const addNotification = async (data: {
  userId: number;
  message: string;
}) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return await res.json();
};

export const updateNotification = async (id: number, message: string) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  return await res.json();
};

export const deleteNotification = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return await res.json();
};
