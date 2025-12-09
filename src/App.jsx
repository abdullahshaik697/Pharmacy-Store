import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";
import "./shared/styles/app.css"; 


const Home = () => (
  <div className="page">
    <h2>Home Page</h2>
    <p>Welcome to Pharmacy Store! Browse products and manage your cart.</p>
  </div>
);

const Products = () => (
  <div className="page">
    <h2>Products Page</h2>
    <p>List of all pharmacy products will appear here.</p>
  </div>
);

const ProductDetails = () => (
  <div className="page">
    <h2>Product Details Page</h2>
    <p>Details of the selected product will appear here.</p>
  </div>
);

const Cart = () => (
  <div className="page">
    <h2>Cart Page</h2>
    <p>Your selected products will appear here.</p>
  </div>
);

const Checkout = () => (
  <div className="page">
    <h2>Checkout Page</h2>
    <p>Checkout process and payment details will appear here.</p>
  </div>
);

const OrderSuccess = () => (
  <div className="page">
    <h2>Order Success Page</h2>
    <p>Thank you for your purchase! Your order has been successfully placed.</p>
  </div>
);

const Login = () => (
  <div className="page">
    <h2>Login Page</h2>
    <p>Login form will appear here.</p>
  </div>
);

const Register = () => (
  <div className="page">
    <h2>Register Page</h2>
    <p>Registration form will appear here.</p>
  </div>
);

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
