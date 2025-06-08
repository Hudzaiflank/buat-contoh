const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const userSchema = require("./graphql/schemas/userSchema");
const userResolvers = require("./graphql/resolvers/userResolvers");

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs: userSchema,
    resolvers: userResolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4001, () => {
    console.log("UserService GraphQL running at http://localhost:4001/graphql");
  });
};

startServer();
