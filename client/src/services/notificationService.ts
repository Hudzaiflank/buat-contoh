const BASE_URL = import.meta.env.VITE_NOTIFICATION_SERVICE_GRAPHQL;

export const getAllNotifications = async () => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          getAllNotifications {
            notification_id
            user_id
            complaint_id
            message
            status
          }
        }
      `,
    }),
  });

  const result = await res.json();
  return result.data.getAllNotifications;
};

export const getNotificationById = async (id: number) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          getNotificationById(notification_id: ${id}) {
            notification_id
            user_id
            complaint_id
            message
            status
          }
        }
      `,
    }),
  });

  const result = await res.json();
  return result.data.getNotificationById;
};

export const addNotification = async (data: {
  userId: number;
  complaintId: number;
  message: string;
  status: string;
}) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation {
          addNotification(
            user_id: ${data.userId},
            complaint_id: ${data.complaintId},
            message: "${data.message}",
            status: "${data.status}"
          )
        }
      `,
    }),
  });

  const result = await res.json();
  return result.data.addNotification;
};

export const updateNotification = async (
  id: number,
  data: { userId: number; complaintId: number; message: string; status: string }
) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation {
          updateNotification(
            notification_id: ${id},
            user_id: ${data.userId},
            complaint_id: ${data.complaintId},
            message: "${data.message}",
            status: "${data.status}"
          )
        }
      `,
    }),
  });

  const result = await res.json();
  return result.data.updateNotification;
};

export const deleteNotification = async (id: number) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation {
          deleteNotification(notification_id: ${id})
        }
      `,
    }),
  });

  const result = await res.json();
  return result.data.deleteNotification;
};
