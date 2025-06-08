// app.js
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const orderSchema = require("./graphql/schema/orderSchema");
const orderResolvers = require("./graphql/resolver/orderResolver");

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs: orderSchema,
    resolvers: orderResolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4005, () => {
    console.log(
      "OrderService GraphQL running at http://localhost:4005/graphql"
    );
  });
};

startServer();
