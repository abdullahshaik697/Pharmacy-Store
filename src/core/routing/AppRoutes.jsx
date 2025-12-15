// src/core/routing/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import "../../shared/styles/app.css";

// Import components - FIXED PATHS
import Login from "../../modules/auth/pages/Login"; // Capital L
import Register from "../../modules/auth/pages/Register"; // Capital R

// Temporary placeholder components
const Home = () => <div className="page">Home Page</div>;
const Products = () => <div className="page">Products Page</div>;
const ProductDetails = () => <div className="page">Product Details</div>;
const Cart = () => <div className="page">Cart Page</div>;
const Checkout = () => <div className="page">Checkout Page</div>;
const OrderSuccess = () => <div className="page">Order Success</div>;

const AppRoutes = () => {
    return (
        <>
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
        </>
    );
};

export default AppRoutes;