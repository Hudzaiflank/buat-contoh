const { gql } = require("apollo-server-express");

const notificationTypeDefs = gql`
  type Notification {
    notification_id: ID!
    user_id: Int!
    complaint_id: Int!
    message: String!
    status: String!
  }

  type Query {
    getAllNotifications: [Notification]
    getNotificationById(id: ID!): Notification
    getNotificationsByUserId(userId: ID!): [Notification]
  }

  type Mutation {
    addNotification(
      user_id: Int!
      complaint_id: Int!
      message: String!
      status: String!
    ): Notification
    updateNotification(
      id: ID!
      user_id: Int!
      complaint_id: Int!
      message: String!
      status: String!
    ): String
    deleteNotification(id: ID!): String
  }
`;

module.exports = notificationTypeDefs;
