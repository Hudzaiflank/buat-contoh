const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const notificationTypeDefs = require("./graphql/schema/notificationSchema");
const notificationResolvers = require("./graphql/resolvers/notificationResolvers");

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: notificationTypeDefs,
    resolvers: notificationResolvers,
  });

  await server.start();
  server.applyMiddleware({ app });

  const PORT = 4004;
  app.listen(PORT, () => {
    console.log(
      `🚀 NotificationService GraphQL ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
