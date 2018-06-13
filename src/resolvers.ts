import Product from './models/product'

type Product = {
  _id: string
  name: string
  qty: number
}

// const products: Product[] = [
//   {
//     _id: '1',
//     name: 'foo',
//     qty: 1,
//   },
//   {
//     _id: '2',
//     name: 'bar',
//     qty: 2,
//   },
// ]

type ProductInput = {
  name: string
  qty: number
}

export const resolvers = {
  Query: {
    hello() {
      return 'Welcome to G'
    },

    greet(root: any, { msg }: { msg: string }, context: object) {
      console.log(context)
      return `Hello ${msg}`
    },

    async allProducts() {
      return await Product.find()
    },

    async getProduct(root: any, { _id }: { _id: string }) {
      return await Product.findById(_id)
    },
  },

  Mutation: {
    async createProduct(root: any, { input }: { input: ProductInput }) {
      return await Product.create(input)
    },

    async updateProduct(
      root: any,
      { _id, input }: { _id: string; input: ProductInput }
    ) {
      return await Product.findOneAndUpdate({ _id }, input, { new: true })
    },
  },
}
