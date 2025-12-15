import React from "react";
import PrescriptionCard from "../components/PrescriptionCard";
import usePrescriptions from "../hooks/usePrescriptions";

const PrescriptionStatus = () => {
  const { prescriptions } = usePrescriptions();

  return (
    <div className="page">
      <h2>Prescription Status</h2>

      {prescriptions.length === 0 ? (
        <p>No prescriptions uploaded yet.</p>
      ) : (
        prescriptions.map((item) => (
          <PrescriptionCard key={item.id} prescription={item} />
        ))
      )}
    </div>
  );
};

export default PrescriptionStatus;
