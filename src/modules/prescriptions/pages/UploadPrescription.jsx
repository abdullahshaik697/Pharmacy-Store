import React from "react";
import PrescriptionUploadForm from "../components/PrescriptionUploadForm";

const UploadPrescription = () => {
  return (
    <div className="page">
      <h2>Upload Prescription</h2>
      <p>
        Upload a clear image or PDF of a valid doctor’s prescription.
        Our pharmacist will review it shortly.
      </p>

      <PrescriptionUploadForm />
    </div>
  );
};

export default UploadPrescription;
