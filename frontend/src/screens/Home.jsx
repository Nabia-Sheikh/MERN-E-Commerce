import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import Products from "../Component/Products"
import axios from "axios"

const Home = () => {
  const [products, setProducts] = useState([])
  useState(() => {
    axios
      .get("/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err))
  }, [])

  // const fetchProducts = async () => {
  //   const res = await axios.get("/api/products")
  //   console.log("====================================")
  //   console.log(res)
  //   console.log("====================================")
  //   setProducts(res)
  // }
  // fetchProducts()

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Home
