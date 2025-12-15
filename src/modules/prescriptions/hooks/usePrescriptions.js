import { useState, useEffect } from "react";
import { fetchPrescriptions } from "../services/prescriptionService";

const usePrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPrescriptions = async () => {
      try {
        setLoading(true);
        const data = await fetchPrescriptions();
        setPrescriptions(data);
      } catch (err) {
        setError("Failed to load prescriptions");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPrescriptions();
  }, []);

  const addPrescription = (prescription) => {
    setPrescriptions((prev) => [prescription, ...prev]);
  };

  return {
    prescriptions,
    loading,
    error,
    addPrescription,
    refetch: () => {
    }
  };
};

export default usePrescriptions;