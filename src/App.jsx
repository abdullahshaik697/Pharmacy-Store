import { Routes, Route } from "react-router-dom";
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";
import "./shared/styles/app.css";

function App() {
  return (
    <>
      <Header />

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
