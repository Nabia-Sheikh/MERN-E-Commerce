const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const { notFound, errorHandler } = require("./middleware/errorMiddleware")
const colors = require("colors")
const productRoute = require("./routes/productRoute")

const app = express()



app.use(express.json())
dotenv.config()
connectDB()


app.use("/api/products", productRoute)

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow)
})
