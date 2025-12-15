import React from "react";

const PrescriptionCard = ({ prescription }) => {
  const { id, status, uploadedAt } = prescription;

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'under review': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Prescription ID: <span className="text-blue-600">{id}</span>
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Uploaded On: {uploadedAt}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
      
      <div className="flex space-x-3 mt-4">
        <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md text-sm font-medium hover:bg-blue-100 transition-colors">
          View Details
        </button>
        <button className="px-4 py-2 bg-gray-50 text-gray-600 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
          Download
        </button>
      </div>
    </div>
  );
};

export default PrescriptionCard;