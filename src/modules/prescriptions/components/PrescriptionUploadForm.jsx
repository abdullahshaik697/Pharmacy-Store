import React, { useState } from "react";
import Button from "../../../shared/components/Button";
import { uploadPrescription } from "../services/prescriptionService";

const PrescriptionUploadForm = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setMessage("Please select a prescription file.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await uploadPrescription(file);
      setMessage(response.message);
      setFile(null);
    } catch (error) {
      setMessage("Upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <Button
        label={loading ? "Uploading..." : "Upload Prescription"}
        type="submit"
      />

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </form>
  );
};

export default PrescriptionUploadForm;
