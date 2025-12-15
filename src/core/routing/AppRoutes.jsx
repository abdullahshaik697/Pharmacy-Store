import { Routes, Route } from "react-router-dom";
import "../../shared/styles/app.css";

// Auth imports
import Login from "../../modules/auth/pages/Login";
import Register from "../../modules/auth/pages/Register";

// Prescription imports
import UploadPrescription from "../../modules/prescriptions/pages/UploadPrescription";
import PrescriptionStatus from "../../modules/prescriptions/pages/PrescriptionStatus";

// Placeholder components for other routes
const Home = () => <div className="page">Welcome to Pharmacy Store</div>;
const Products = () => <div className="page">Products Page</div>;
const Cart = () => <div className="page">Cart Page</div>;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/products" element={<Products />} />
            
            <Route path="/cart" element={<Cart />} />
            
            <Route path="/upload-prescription" element={<UploadPrescription />} />
            <Route path="/prescription-status" element={<PrescriptionStatus />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
};

export default AppRoutes;