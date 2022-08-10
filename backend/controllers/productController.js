const Product = require("../models/productModel")

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products).status(200)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getProductById = async (req, res) => {
  const { id } = req.params
  try {
    const product = await Product.findById(id)
    if (product) {
      res.json(product).status(200)
    } else {
      res.status(404).json({ message: "Product not found" })
    }
  } catch (error) {
    res.status(404).json({
      message: "Product not found",
    })
  }
}
module.exports = { getProducts, getProductById }
