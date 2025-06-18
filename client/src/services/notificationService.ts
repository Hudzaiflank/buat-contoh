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
        query GetNotificationById($id: ID!) {
          getNotificationById(id: $id) {
            notification_id
            user_id
            complaint_id
            message
            status
          }
        }
      `,
      variables: { id },
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
        mutation AddNotification(
          $user_id: Int!,
          $complaint_id: Int!,
          $message: String!,
          $status: String!
        ) {
          addNotification(
            user_id: $user_id,
            complaint_id: $complaint_id,
            message: $message,
            status: $status
          ) {
            notification_id
            user_id
            complaint_id
            message
            status
          }
        }
      `,
      variables: {
        user_id: data.userId,
        complaint_id: data.complaintId,
        message: data.message,
        status: data.status,
      },
    }),
  });

  const result = await res.json();
  return result.data.addNotification;
};

export const updateNotification = async (
  id: number,
  data: {
    userId: number;
    complaintId: number;
    message: string;
    status: string;
  }
) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation UpdateNotification(
          $id: ID!,
          $user_id: Int!,
          $complaint_id: Int!,
          $message: String!,
          $status: String!
        ) {
          updateNotification(
            id: $id,
            user_id: $user_id,
            complaint_id: $complaint_id,
            message: $message,
            status: $status
          )
        }
      `,
      variables: {
        id,
        user_id: data.userId,
        complaint_id: data.complaintId,
        message: data.message,
        status: data.status,
      },
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
        mutation DeleteNotification($id: ID!) {
          deleteNotification(id: $id)
        }
      `,
      variables: { id },
    }),
  });

  const result = await res.json();
  return result.data.deleteNotification;
};
