import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../../App";

// Auth
import Login from "../../modules/auth/pages/Login";
import Register from "../../modules/auth/pages/Register";

// Products
import ProductList from "../../modules/products/pages/ProductList";
import ProductDetails from "../../modules/products/pages/ProductDetails";

// Cart
import CartPage from "../../modules/cart/pages/CartPage";

// Orders
import Checkout from "../../modules/orders/pages/Checkout";
import OrderSuccess from "../../modules/orders/pages/OrderSuccess";

// Shared Layout
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      
        <Route path="/" element={<App />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />

       
        <Route path="/cart" element={<CartPage />} />

       
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

       
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
