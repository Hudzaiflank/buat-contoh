const { gql } = require("apollo-server-express");

const productSchema = gql`
  type Product {
    product_id: Int
    name: String
    type: String
    location: String
    status: String
    description: String
  }

  type SuccessMessage {
    success: Boolean
  }

  type Query {
    products: [Product]
    product(id: Int!): Product
  }

  type Mutation {
    addProduct(
      name: String!
      type: String!
      location: String!
      status: String!
      description: String!
    ): Product
    updateProduct(
      id: Int!
      name: String!
      type: String!
      location: String!
      status: String!
      description: String!
    ): Product
    deleteProduct(id: Int!): SuccessMessage
  }
`;

module.exports = productSchema;
