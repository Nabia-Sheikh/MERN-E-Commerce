const express = require("express")
const dotenv = require("dotenv")
const products = require("./data/products")

const app = express()
app.use(express.json())
dotenv.config()

app.get("/api/products", (req, res) => {
  res.send(products)
})

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  res.send(product)
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log("Server is running on port " + port)
})
