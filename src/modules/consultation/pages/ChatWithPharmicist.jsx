const ChatWithPharmicist = () => {
  const { messages, send } = useConsultation();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-4 flex flex-col">

        <h2 className="text-xl font-bold text-center text-purple-700 mb-4">
          Chat with Pharmacist
        </h2>

        <p className="text-sm text-gray-500 text-center mb-4">
          Ask medicine-related questions and get expert guidance.
        </p>

        
      </div>
    </div>
  );
};

export default ChatWithPharmicist;
