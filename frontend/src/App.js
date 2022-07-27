import React from "react"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import { Container } from "react-bootstrap"
import Home from "./screens/Home"
import { Route, Routes } from "react-router-dom"
import Product from "./screens/Product"
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
