const products = [
  {
    _id: '12',
    name: 'foo',
    qty: 1,
  },
  {
    _id: '13',
    name: 'bar',
    qty: 2,
  },
]

export const resolvers = {
  Query: {
    hello() {
      return 'Welcome to G'
    },

    greet(root: any, { msg }: { msg: string }, context: object) {
      console.log(context)
      return `Hello ${msg}`
    },

    allProducts() {
      return products
    },
  },
}
