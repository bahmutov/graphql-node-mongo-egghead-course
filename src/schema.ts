import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    hello: String!
    greet (msg: String!): String!
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers
})
