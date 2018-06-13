import * as express from 'express';

const app = express()
const PORT = 3000
app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
