import React, { useEffect } from "react"
import { Col, Row } from "react-bootstrap"
import Products from "../Component/Products"
import { useDispatch, useSelector } from "react-redux"
import { listProducts } from "../actions/productActions"
import Loader from "../Component/Loader"
import Message from "../Component/Message"

const Home = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  console.log(productList)
  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map(
            (product) => (
              console.log(product),
              (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Products product={product} />
                </Col>
              )
            )
          )}
        </Row>
      )}
    </>
  )
}

export default Home
