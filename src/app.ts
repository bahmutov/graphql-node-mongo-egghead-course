import { ApolloEngine } from 'apollo-engine'
import { ApolloServer } from 'apollo-server'
import express from 'express'
import Knex from 'knex'
import morgan from 'morgan'
import { Model } from 'objection'
import schema from './schema'

const server = new ApolloServer({
  ...schema,
  tracing: true,
  cacheControl: true,
})

const knexConfig = require('../knexfile')

const knex = Knex(knexConfig.development)
Model.knex(knex)

const app = express()
const PORT = 3000

app.use(morgan('dev')).set('json spaces', 2)

app.get('/', (req, res) => {
  return res.json({
    message: 'hello there',
  })
})

server.applyMiddleware({ app })

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

const onListen = () => {
  console.log(`server running at ${PORT}`)
  console.log(`GraphQL playground at ${PORT}/graphql`)
}

const apolloEngineApiKey = process.env.APOLLO_ENGINE_API_KEY
if (apolloEngineApiKey) {
  console.log('running Apollo Engine')
  const engine = new ApolloEngine({
    apiKey: apolloEngineApiKey,
  })
  engine.listen(
    {
      port: PORT,
      expressApp: app,
    },
    onListen
  )
} else {
  console.log('running Express server')
  app.listen(PORT, onListen)
}
