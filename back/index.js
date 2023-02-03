const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        getYear: Int!
        hello(yr: Int!): String
    }
`;

const resolvers = {
  Query: {
    getYear: () => {
      return new Date().getFullYear();
    },
    hello: (parent, { yr }) => {
      return `Hello World! ' ${yr}`;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
