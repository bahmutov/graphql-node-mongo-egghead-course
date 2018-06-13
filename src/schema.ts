import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type Product {
    _id: ID
    name: String!
    qty: Int
  }

  type Query {
    hello: String!
    greet (msg: String!): String!
    allProducts: Product
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
