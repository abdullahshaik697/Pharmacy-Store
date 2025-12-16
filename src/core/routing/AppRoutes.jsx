import { Routes, Route } from "react-router-dom";
import "../../shared/styles/app.css";


import Login from "../../modules/auth/pages/Login";
import Register from "../../modules/auth/pages/Register";


import UploadPrescription from "../../modules/prescriptions/pages/UploadPrescription";
import PrescriptionStatus from "../../modules/prescriptions/pages/PrescriptionStatus";


import InventoryList from "../../modules/Inventory/pages/InventoryList";
import ExpiringStock from "../../modules/Inventory/pages/ExpiringStock";

// Placeholder components for other routes
const Home = () => (
  <div className="page">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Pharmacy Store</h1>
    <p className="text-gray-600">Your one-stop solution for all pharmacy needs</p>
  </div>
);
const Products = () => <div className="page">Products Page - Coming Soon</div>;
const Cart = () => <div className="page">Cart Page - Coming Soon</div>;

const AppRoutes = () => {
    return (
        <Routes>
            
            <Route path="/" element={<Home />} />
            
            
            <Route path="/products" element={<Products />} />
            
           
            <Route path="/cart" element={<Cart />} />
            
           
            <Route path="/upload-prescription" element={<UploadPrescription />} />
            <Route path="/prescription-status" element={<PrescriptionStatus />} />
            
         
            <Route path="/inventory" element={<InventoryList />} />
            <Route path="/inventory/expiring" element={<ExpiringStock />} />
            
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />


        </Routes>
    );
};

export default AppRoutes;

