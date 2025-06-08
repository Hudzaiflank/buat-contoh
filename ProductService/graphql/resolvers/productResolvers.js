const productModel = require("../../models/productModel");

const productResolvers = {
  Query: {
    products: async () => await productModel.getAllProducts(),
    product: async (_, { id }) => await productModel.getProductById(id),
  },
  Mutation: {
    addProduct: async (_, { name, type, location, status, description }) =>
      await productModel.addProduct(name, type, location, status, description),
    updateProduct: async (
      _,
      { id, name, type, location, status, description }
    ) =>
      await productModel.updateProduct(
        id,
        name,
        type,
        location,
        status,
        description
      ),
    deleteProduct: async (_, { id }) => await productModel.deleteProduct(id),
  },
};

module.exports = productResolvers;
