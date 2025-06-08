const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");

const complaintSchema = require("./graphql/schemas/complaintSchema");
const complaintResolvers = require("./graphql/resolvers/complaintResolvers");

const startServer = async () => {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    typeDefs: complaintSchema,
    resolvers: complaintResolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4003, () => {
    console.log(
      "ComplaintService GraphQL running at http://localhost:4003/graphql"
    );
  });
};

startServer();
