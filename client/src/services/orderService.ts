const BASE_URL = import.meta.env.VITE_ORDER_SERVICE_GRAPHQL;

export const getAllOrders = async () => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          orders {
            order_id
            user_id
            product_id
            request_type
            status
          }
        }
      `,
    }),
  });
  const { data } = await res.json();
  console.log("Orders data received:", data);
  return data.orders;
};

export const getOrderById = async (id: number) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetOrderById($id: Int!) {
          order(id: $id) {
            order_id
            user_id
            product_id
            request_type
            status
          }
        }
      `,
      variables: { id },
    }),
  });
  const { data } = await res.json();
  return data.order;
};

export const addOrder = async (data: {
  userId: number;
  productId: number;
  requestType: string;
  status: string;
}) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation AddOrder($userId: Int!, $productId: Int!, $requestType: String!, $status: String!) {
          addOrder(user_id: $userId, product_id: $productId, request_type: $requestType, status: $status) {
            order_id
          }
        }
      `,
      variables: data,
    }),
  });
  const { data: result } = await res.json();
  return result.addOrder;
};

export const updateOrder = async (
  id: number,
  data: {
    userId: number;
    productId: number;
    requestType: string;
    status: string;
  }
) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation UpdateOrder($orderId: Int!, $userId: Int!, $productId: Int!, $requestType: String!, $status: String!) {
          updateOrder(order_id: $orderId, user_id: $userId, product_id: $productId, request_type: $requestType, status: $status) {
            message
          }
        }
      `,
      variables: {
        orderId: id,
        ...data,
      },
    }),
  });
  const { data: result } = await res.json();
  return result.updateOrder;
};

export const deleteOrder = async (id: number) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        mutation DeleteOrder($id: Int!) {
          deleteOrder(order_id: $id) {
            message
          }
        }
      `,
      variables: { id },
    }),
  });
  const { data: result } = await res.json();
  return result.deleteOrder;
};
