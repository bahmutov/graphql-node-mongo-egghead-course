import express from 'express';

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  return res.json({
    message: 'hello there'
  })
})

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`)
})
