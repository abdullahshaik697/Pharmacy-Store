import { useState } from "react";

const usePrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: "RX-1001",
      status: "Under Review",
      uploadedAt: "12 Sept 2025",
    },
  ]);

  const addPrescription = (prescription) => {
    setPrescriptions((prev) => [...prev, prescription]);
  };

  return {
    prescriptions,
    addPrescription,
  };
};

export default usePrescriptions;
