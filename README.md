Building an Express server with Objection.js and GraphQL

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
