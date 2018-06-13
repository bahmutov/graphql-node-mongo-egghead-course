export const resolvers = {
  Query: {
    hello: () => {
      return 'Welcome to G'
    },

    greet: (root:any, {msg}: {msg: string}, context:object) => {
      console.log(context)
      return `Hello ${msg}`
    }
  }
}
