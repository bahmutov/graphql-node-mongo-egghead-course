import express from 'express'
import graphqlHTTP from 'express-graphql'
import mongoose from 'mongoose'
import schema from './schema'

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/gql_db')

app.use(
  '/g',
  graphqlHTTP({
    schema,
    graphiql: true,
    context: {
      userId: 1,
    },
  } as graphqlHTTP.Options)
)

app.get('/', (req, res) => {
  return res.json({
    message: 'hello there',
  })
})

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
