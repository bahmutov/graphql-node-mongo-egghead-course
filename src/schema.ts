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
    allProducts: [Product]
    getProduct(_id: ID): Product
  }

  input ProductInput {
    name: String!
    qty: Int!
  }

  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(_id: ID, input: ProductInput): Product
    "when deleting an item, just return the ID"
    deleteProduct(_id: ID): ID
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
