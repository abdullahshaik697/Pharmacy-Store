import React, { useState } from 'react';

const StockUpdateForm = ({ item, onSave, onCancel }) => {
  const [quantity, setQuantity] = useState(item.stock);
  const [notes, setNotes] = useState('');
  const [adjustmentType, setAdjustmentType] = useState('set');
  const [adjustmentValue, setAdjustmentValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let finalQuantity = quantity;
    
    if (adjustmentType === 'add') {
      finalQuantity = item.stock + adjustmentValue;
    } else if (adjustmentType === 'subtract') {
      finalQuantity = item.stock - adjustmentValue;
    }
    
    if (finalQuantity < 0) {
      alert('Stock cannot be negative');
      return;
    }
    
    onSave(finalQuantity);
  };

  const calculateNewQuantity = () => {
    if (adjustmentType === 'set') return quantity;
    if (adjustmentType === 'add') return item.stock + adjustmentValue;
    if (adjustmentType === 'subtract') return item.stock - adjustmentValue;
    return quantity;
  };

  const newQuantity = calculateNewQuantity();
  const difference = newQuantity - item.stock;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Update Stock: {item.name}</h3>
          <p className="text-sm text-gray-500 mt-1">SKU: {item.sku}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="px-6 py-4">
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Current Stock</p>
                <p className="text-2xl font-bold text-gray-900">{item.stock}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">After Update</p>
                <p className={`text-2xl font-bold ${
                  difference > 0 ? 'text-green-600' : 
                  difference < 0 ? 'text-red-600' : 'text-gray-900'
                }`}>
                  {newQuantity}
                </p>
                <p className={`text-sm ${difference > 0 ? 'text-green-600' : difference < 0 ? 'text-red-600' : 'text-gray-500'}`}>
                  {difference > 0 ? `+${difference}` : difference}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adjustment Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setAdjustmentType('set')}
                className={`py-2 text-sm font-medium rounded-md ${
                  adjustmentType === 'set' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Set To
              </button>
              <button
                type="button"
                onClick={() => setAdjustmentType('add')}
                className={`py-2 text-sm font-medium rounded-md ${
                  adjustmentType === 'add' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Add
              </button>
              <button
                type="button"
                onClick={() => setAdjustmentType('subtract')}
                className={`py-2 text-sm font-medium rounded-md ${
                  adjustmentType === 'subtract' 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Subtract
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {adjustmentType === 'set' ? 'New Stock Quantity' : 
               adjustmentType === 'add' ? 'Quantity to Add' : 
               'Quantity to Subtract'}
            </label>
            <input
              type="number"
              min="0"
              value={adjustmentType === 'set' ? quantity : adjustmentValue}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                if (adjustmentType === 'set') {
                  setQuantity(value);
                } else {
                  setAdjustmentValue(value);
                }
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes (Optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Reason for stock adjustment..."
            />
          </div>

       
          {difference !== 0 && (
            <div className={`mb-6 p-3 rounded-lg ${
              difference > 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              <div className="flex items-center">
                <svg className={`w-5 h-5 mr-2 ${difference > 0 ? 'text-green-500' : 'text-red-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={difference > 0 ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
                </svg>
                <span className={`text-sm font-medium ${difference > 0 ? 'text-green-700' : 'text-red-700'}`}>
                  Stock will be {difference > 0 ? 'increased' : 'decreased'} by {Math.abs(difference)} units
                </span>
              </div>
            </div>
          )}

         
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Update Stock
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StockUpdateForm;