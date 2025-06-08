const { gql } = require("apollo-server-express");

const userSchema = gql`
  type User {
    user_id: Int
    name: String
    email: String
    password: String
  }

  type Query {
    users: [User]
    user(id: Int!): User
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): User
    updateUser(id: Int!, name: String!, email: String!): User
    deleteUser(id: Int!): SuccessMessage
  }

  type SuccessMessage {
    success: Boolean
  }
`;

module.exports = userSchema;
