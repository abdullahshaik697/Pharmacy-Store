import React, { useState } from 'react';
import StockUpdateForm from './StockUpdateForm';
import useInventory from '../hooks/useInventory';

const InventoryItem = ({ item }) => {
  const { updateStock, updatingId, deleteItem } = useInventory();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleUpdateStock = async (newStock) => {
    try {
      await updateStock(item.id, newStock);
      setShowUpdateForm(false);
    } catch (error) {
      console.error('Failed to update stock:', error);
    }
  };

  const handleDelete = async () => {
    if (window.confirm(`Are you sure you want to delete "${item.name}"?`)) {
      try {
        await deleteItem(item.id);
      } catch (error) {
        console.error('Failed to delete item:', error);
      }
    }
  };

  const getStockStatus = () => {
    if (item.stock <= 0) {
      return { color: 'bg-red-100 text-red-800', label: 'Out of Stock', icon: '❌' };
    }
    if (item.stock <= (item.reorderLevel || 10)) {
      return { color: 'bg-yellow-100 text-yellow-800', label: 'Low Stock', icon: '⚠️' };
    }
    return { color: 'bg-green-100 text-green-800', label: 'In Stock', icon: '✅' };
  };

  const stockStatus = getStockStatus();

  const isUpdating = updatingId === item.id;

  return (
    <>
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4">
          <div>
            <div className="font-medium text-gray-900">{item.name}</div>
            {item.supplier && (
              <div className="text-sm text-gray-500">Supplier: {item.supplier}</div>
            )}
          </div>
        </td>
        <td className="px-6 py-4">
          <code className="text-sm bg-gray-100 px-2 py-1 rounded font-mono">{item.sku}</code>
        </td>
        <td className="px-6 py-4">
          <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
            {item.category || 'Uncategorized'}
          </span>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${stockStatus.color}`}>
              {stockStatus.icon} {item.stock}
            </span>
            {isUpdating && (
              <span className="ml-2 text-xs text-gray-500">Updating...</span>
            )}
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="text-sm font-medium text-gray-900">
            ₹{item.price?.toFixed(2) || '0.00'}
          </div>
          <div className="text-xs text-gray-500">
            Value: ₹{(item.stock * (item.price || 0)).toFixed(2)}
          </div>
        </td>
        <td className="px-6 py-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
            {stockStatus.label}
          </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <div className="flex space-x-2">
            <button
              onClick={() => setShowUpdateForm(true)}
              disabled={isUpdating}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm hover:bg-blue-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Update Stock
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="px-3 py-1 bg-gray-50 text-gray-600 rounded-md text-sm hover:bg-gray-100 transition-colors"
            >
              {showDetails ? 'Hide' : 'Details'}
            </button>
            <button
              onClick={handleDelete}
              className="px-3 py-1 bg-red-50 text-red-600 rounded-md text-sm hover:bg-red-100 transition-colors"
            >
              Delete
            </button>
          </div>
        </td>
      </tr>

     
      {showDetails && (
        <tr>
          <td colSpan="7" className="px-6 py-4 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Product Details</h4>
                <div className="space-y-1 text-sm">
                  <div><span className="text-gray-500">ID:</span> {item.id}</div>
                  <div><span className="text-gray-500">Created:</span> {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'N/A'}</div>
                  {item.expiryDate && (
                    <div><span className="text-gray-500">Expiry:</span> {item.expiryDate}</div>
                  )}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Stock Information</h4>
                <div className="space-y-1 text-sm">
                  <div><span className="text-gray-500">Current Stock:</span> {item.stock}</div>
                  <div><span className="text-gray-500">Reorder Level:</span> {item.reorderLevel || 'Not set'}</div>
                  <div><span className="text-gray-500">Stock Value:</span> ₹{(item.stock * (item.price || 0)).toFixed(2)}</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Pricing</h4>
                <div className="space-y-1 text-sm">
                  <div><span className="text-gray-500">Unit Price:</span> RS{item.price?.toFixed(2) || '0.00'}</div>
                  <div><span className="text-gray-500">Cost Price:</span> RS{(item.costPrice?.toFixed(2)) || 'N/A'}</div>
                  <div><span className="text-gray-500">Margin:</span> {item.price && item.costPrice ? `${(((item.price - item.costPrice) / item.costPrice) * 100).toFixed(1)}%` : 'N/A'}</div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Quick Actions</h4>
                <div className="space-y-2">
                  <button className="w-full px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200">
                    View Sales History
                  </button>
                  <button className="w-full px-3 py-1 bg-green-100 text-green-700 rounded text-sm hover:bg-green-200">
                    Order More
                  </button>
                  <button className="w-full px-3 py-1 bg-purple-100 text-purple-700 rounded text-sm hover:bg-purple-200">
                    Set Reminder
                  </button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}

      {showUpdateForm && (
        <StockUpdateForm
          item={item}
          onSave={handleUpdateStock}
          onCancel={() => setShowUpdateForm(false)}
        />
      )}
    </>
  );
};

export default InventoryItem;