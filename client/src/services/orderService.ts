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
  return data.orders;
};

export const getOrderById = async (id: number) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query GetOrderById($order_id: ID!) {
          order(order_id: $order_id) {
            order_id
            user_id
            product_id
            request_type
            status
          }
        }
      `,
      variables: { order_id: id },
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
        mutation AddOrder(
          $user_id: ID!,
          $product_id: ID!,
          $request_type: String!,
          $status: String!
        ) {
          addOrder(
            user_id: $user_id,
            product_id: $product_id,
            request_type: $request_type,
            status: $status
          ) {
            order_id
            user_id
            product_id
            request_type
            status
          }
        }
      `,
      variables: {
        user_id: data.userId,
        product_id: data.productId,
        request_type: data.requestType,
        status: data.status,
      },
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
        mutation UpdateOrder(
          $order_id: ID!,
          $user_id: ID!,
          $product_id: ID!,
          $request_type: String!,
          $status: String!
        ) {
          updateOrder(
            order_id: $order_id,
            user_id: $user_id,
            product_id: $product_id,
            request_type: $request_type,
            status: $status
          ) {
            order_id
            user_id
            product_id
            request_type
            status
          }
        }
      `,
      variables: {
        order_id: id,
        user_id: data.userId,
        product_id: data.productId,
        request_type: data.requestType,
        status: data.status,
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
        mutation DeleteOrder($order_id: ID!) {
          deleteOrder(order_id: $order_id)
        }
      `,
      variables: { order_id: id },
    }),
  });

  const { data: result } = await res.json();
  return result.deleteOrder;
};
