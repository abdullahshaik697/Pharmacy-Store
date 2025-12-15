export const uploadPrescription = async (file) => {
  // simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: "Prescription uploaded successfully. Awaiting review.",
      });
    }, 1000);
  });
};

export const fetchPrescriptions = async () => {
  return [];
};
