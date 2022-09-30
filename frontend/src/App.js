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
import Order from "./screens/Order"
import UserList from "./screens/UserList"
import UserEdit from "./screens/UserEdit"
import ProductList from "./screens/ProductList"
import ProductEdit from "./screens/ProductEdit"
import OrderList from "./screens/orderList"
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route
              path="/register"
              element={<Register />} />
            <Route
              path="/login"
              element={<Login />} />
            <Route
              path="/search/:keyword"
              element={<Home />} />
            <Route
              path="/"
              element={<Home />} />
            <Route
              path="/page/:pageNumber"
              element={<Home />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<Home />} />
            <Route
              path="/product/:id"
              element={<Product />} />
            <Route
              path="/cart"
              element={<Cart />}>
              <Route
                path=":id"
                element={<Cart />} />
            </Route>
            <Route
              path="/admin/userlist"
              element={<UserList />} />
            <Route
              path="/admin/user/:id/edit"
              element={<UserEdit />} />
            <Route
              path="/admin/productlist"
              element={<ProductList />} />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductList />} />
            <Route
              path="/admin/product/:id/edit"
              element={<ProductEdit />} />
            <Route
              path="/admin/orderlist"
              element={<OrderList />} />
            <Route
              path="/shipping"
              element={<Shipping />} />
            <Route
              path="/payment"
              element={<Payment />} />
            <Route
              path="/placeorder"
              element={<PlaceOrder />} />
            <Route
              path="/profile"
              element={<Profile />} />
            <Route
              path="/order"
              element={<Order />}>
              <Route
                path=":id"
                element={<Order />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
