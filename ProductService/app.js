const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const productSchema = require("./graphql/schemas/productSchema");
const productResolvers = require("./graphql/resolvers/productResolvers");

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs: productSchema,
    resolvers: productResolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4002, () => {
    console.log(
      "ProductService GraphQL running at http://localhost:4002/graphql"
    );
  });
};

startServer();
