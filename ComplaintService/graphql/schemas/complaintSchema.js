const { gql } = require("apollo-server-express");

const complaintSchema = gql`
  type Complaint {
    complaint_id: Int
    user_id: Int
    product_id: Int
    complaint_text: String
    status: String
  }

  type SuccessMessage {
    success: Boolean
  }

  type Query {
    complaints: [Complaint]
    complaint(id: Int!): Complaint
    complaintsByUser(user_id: Int!): [Complaint]
  }

  type Mutation {
    addComplaint(
      user_id: Int!
      product_id: Int!
      complaint_text: String!
      status: String!
    ): Complaint
    updateComplaint(id: Int!, status: String!): Complaint
    deleteComplaint(id: Int!): SuccessMessage
  }
`;

module.exports = complaintSchema;
