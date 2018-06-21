import express from 'express'
import graphqlHTTP from 'express-graphql'
import Knex from 'knex'
import morgan from 'morgan'
import { Model } from 'objection'
import schema from './schema'

const knexConfig = require('../knexfile')

const knex = Knex(knexConfig.development)
Model.knex(knex)

const app = express()
const PORT = 3000

app.use(morgan('dev')).set('json spaces', 2)

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

// Error handling. The `ValidationError` instances thrown by objection.js have a `statusCode`
// property that is sent as the status code of the response.
//
// NOTE: This is not a good error handler, this is the simplest one. See the error handing
//       recipe for a better handler: http://vincit.github.io/objection.js/#error-handling
app.use((err: any, req: any, res: any, next: any) => {
  if (err) {
    res
      .status(err.statusCode || err.status || 500)
      .send(err.data || err.message || {})
  } else {
    next()
  }
})

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
