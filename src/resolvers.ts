import Product from './models/product'

type ProductInput = {
  name: string
  qty: number
}

type WithId = {
  _id: string
}

type IdAndInput = WithId & {
  input: ProductInput
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
      return await Product.query()
    },

    async getProduct(root: any, { _id }: WithId) {
      return await Product.query().findById(_id)
    },
  },

  Mutation: {
    // creating a single product
    async createProduct(root: any, { input }: { input: ProductInput }) {
      return await Product.query().insert(input as any)
    },

    // updating a product by ID
    async updateProduct(root: any, { _id, input }: IdAndInput) {
      return await Product.query().patchAndFetchById(_id, input as any)
    },

    async deleteProduct(root: any, { _id }: WithId) {
      await Product.query().deleteById(_id)
      return _id
    },
  },
}
