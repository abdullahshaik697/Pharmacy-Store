import React from "react";

const PrescriptionCard = ({ prescription }) => {
  const { id, status, uploadedAt } = prescription;

  return (
    <div className="page" style={{ marginBottom: "15px" }}>
      <p><strong>Prescription ID:</strong> {id}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Uploaded On:</strong> {uploadedAt}</p>
    </div>
  );
};

export default PrescriptionCard;
