const complaintModel = require("../../models/complaintModel");

const complaintResolvers = {
  Query: {
    complaints: async () => await complaintModel.getAllComplaints(),
    complaint: async (_, { id }) => await complaintModel.getComplaintById(id),
    complaintsByUser: async (_, { user_id }) =>
      await complaintModel.getComplaintsByUserId(user_id),
  },
  Mutation: {
    addComplaint: async (_, { user_id, product_id, complaint_text, status }) =>
      await complaintModel.addComplaint(
        user_id,
        product_id,
        complaint_text,
        status
      ),
    updateComplaint: async (_, { id, status }) =>
      await complaintModel.updateComplaint(id, status),
    deleteComplaint: async (_, { id }) =>
      await complaintModel.deleteComplaint(id),
  },
};

module.exports = complaintResolvers;
