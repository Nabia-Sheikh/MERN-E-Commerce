import React from "react"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import { Container } from "react-bootstrap"
import Home from "./screens/Home"
import { Route, Routes } from "react-router-dom"
import Product from "./screens/Product"
import Cart from "./screens/Cart"
import Login from "./screens/Login"
import Register from "./screens/Register"
import Profile from "./screens/Profile"
import Shipping from "./screens/Shipping"
import Payment from "./screens/Payment"
import PlaceOrder from "./screens/PlaceOrder"
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path ="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />}>
              <Route path=":id" element={<Cart />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
