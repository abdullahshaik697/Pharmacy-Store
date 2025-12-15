import React from "react";
import PrescriptionCard from "../components/PrescriptionCard";
import usePrescriptions from "../hooks/usePrescriptions";
import Loader from "../../../shared/components/Loader";

const PrescriptionStatus = () => {
  const { prescriptions, loading, error } = usePrescriptions();

  if (loading) {
    return (
      <div className="page min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader />
          <p className="mt-4 text-gray-600">Loading prescriptions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Prescription Status</h2>
        <p className="text-gray-600 mb-8">
          Track the status of your uploaded prescriptions
        </p>

        {prescriptions.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Prescriptions Yet</h3>
            <p className="text-gray-500 mb-6">
              You haven't uploaded any prescriptions. Upload your first prescription to get started.
            </p>
            <a href="/upload-prescription" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Upload Prescription
            </a>
          </div>
        ) : (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-blue-700">
                  <strong>Tip:</strong> Prescriptions typically take 24-48 hours to review. You'll receive a notification once processed.
                </p>
              </div>
            </div>
            
            <div className="grid gap-6">
              {prescriptions.map((item) => (
                <PrescriptionCard key={item.id} prescription={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PrescriptionStatus;