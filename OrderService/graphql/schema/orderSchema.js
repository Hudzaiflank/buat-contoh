// graphql/schema/orderSchema.js
const { gql } = require("apollo-server-express");

const orderSchema = gql`
  type Order {
    order_id: ID!
    user_id: ID!
    product_id: ID!
    request_type: String!
    status: String!
  }

  type Query {
    orders: [Order]
    order(order_id: ID!): Order
    ordersByUserId(user_id: ID!): [Order]
  }

  type Mutation {
    addOrder(
      user_id: ID!
      product_id: ID!
      request_type: String!
      status: String!
    ): Order

    updateOrder(
      order_id: ID!
      user_id: ID!
      product_id: ID!
      request_type: String!
      status: String!
    ): Order

    deleteOrder(order_id: ID!): String
  }
`;

module.exports = orderSchema;
