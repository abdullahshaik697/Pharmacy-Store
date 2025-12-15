export const uploadPrescription = async (file) => {
  const formData = new FormData();
  formData.append('prescription', file);
  
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!file) {
        reject({ success: false, message: "No file provided" });
      }
      
      if (file.size > 5 * 1024 * 1024) {
        reject({ success: false, message: "File size exceeds 5MB limit" });
      }
      
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        reject({ success: false, message: "Invalid file type. Only JPG, PNG, PDF allowed" });
      }
      
      resolve({
        success: true,
        message: "Prescription uploaded successfully! Our pharmacist will review it shortly.",
        data: {
          id: `RX-${Math.floor(1000 + Math.random() * 9000)}`,
          fileName: file.name,
          uploadDate: new Date().toISOString()
        }
      });
    }, 1500);
  });
};

export const fetchPrescriptions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "RX-1001",
          status: "Under Review",
          uploadedAt: "12 Sept 2025",
          fileName: "prescription1.jpg",
          doctorName: "Dr. Smith",
          notes: "Needs verification"
        },
        {
          id: "RX-1002",
          status: "Approved",
          uploadedAt: "10 Sept 2025",
          fileName: "prescription2.pdf",
          doctorName: "Dr. Johnson",
          notes: "Ready for pickup"
        }
      ]);
    }, 1000);
  });
};