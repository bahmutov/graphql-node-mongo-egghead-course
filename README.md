Building an Express server with MongoDB and GraphQL

Based on Egghead.io [course](https://egghead.io/lessons/graphql-create-express-server-in-node-js)

```
npm install
npm start
open localhost:3000/g
```

You can watch files and auto reload on change with `npm run dev`

## Query details

Types with `!` are non-nullable.

Type can require arguments, for example `greet`

```ts
const typeDefs = `
  type Query {
    greet (msg: String!): String!
  }
`
```

To request `greet` use

```
{
  greet(msg: "foo")
}
```

## Running MongoDB

Via docker with `docker run -p 27017:27017 mongo:3` (see logs) or `docker run -p 27017:27017 -d mongo:3` (running in the background)
