import React from 'react';
import { Link } from 'react-router-dom';
import useInventory from '../hooks/useInventory';
import Loader from '../../../shared/components/Loader';

const ExpiringStock = () => {
  const { expiringSoon, loading, error } = useInventory();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader />
          <p className="mt-4 text-gray-600">Loading expiring stock...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-red-700 mb-2">Error Loading Data</h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  const getDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const getExpiryStatus = (days) => {
    if (days <= 7) return { color: 'bg-red-100 text-red-800', label: 'Critical', icon: '🚨' };
    if (days <= 15) return { color: 'bg-yellow-100 text-yellow-800', label: 'Warning', icon: '⚠️' };
    return { color: 'bg-blue-100 text-blue-800', label: 'Monitor', icon: '👁️' };
  };

  return (
    <div className="page">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Expiring Stock Alert</h1>
              <p className="text-gray-600 mt-2">Items expiring within the next 30 days</p>
            </div>
            <Link 
              to="/inventory"
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              Back to Inventory
            </Link>
          </div>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Expiring</h3>
            <p className="text-3xl font-bold text-red-600">{expiringSoon.length}</p>
            <p className="text-sm text-gray-500 mt-1">Items need attention</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Critical (≤7 days)</h3>
            <p className="text-3xl font-bold text-red-600">
              {expiringSoon.filter(item => getDaysUntilExpiry(item.expiryDate) <= 7).length}
            </p>
            <p className="text-sm text-gray-500 mt-1">Urgent action required</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Next 15 Days</h3>
            <p className="text-3xl font-bold text-yellow-600">
              {expiringSoon.filter(item => {
                const days = getDaysUntilExpiry(item.expiryDate);
                return days > 7 && days <= 15;
              }).length}
            </p>
            <p className="text-sm text-gray-500 mt-1">Plan for disposal/sale</p>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-800">Expiring Items List</h2>
            <p className="text-sm text-gray-600 mt-1">
              Monitor these items closely and take appropriate action
            </p>
          </div>
          
          {expiringSoon.length === 0 ? (
            <div className="px-6 py-12 text-center">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">All Good!</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                No items are expiring within the next 30 days. Continue regular monitoring.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Expiry Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Days Left
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {expiringSoon.map((item) => {
                    const daysLeft = getDaysUntilExpiry(item.expiryDate);
                    const status = getExpiryStatus(daysLeft);
                    
                    return (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="font-medium text-gray-900">{item.name}</div>
                            <div className="text-sm text-gray-500">{item.category}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 font-mono">{item.sku}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.stock <= 10 ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {item.stock} units
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{item.expiryDate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-lg font-semibold text-gray-900">{daysLeft}</div>
                          <div className="text-sm text-gray-500">days</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${status.color} flex items-center`}>
                            <span className="mr-1">{status.icon}</span>
                            {status.label}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 bg-blue-50 text-blue-600 rounded-md text-sm hover:bg-blue-100 transition-colors">
                              Move to Front
                            </button>
                            <button className="px-3 py-1 bg-red-50 text-red-600 rounded-md text-sm hover:bg-red-100 transition-colors">
                              Mark for Disposal
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {expiringSoon.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Recommended Actions</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                  <span className="mr-2">🚨</span> Critical Items (≤7 days)
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Move to designated disposal area</li>
                  <li>• Update inventory records</li>
                  <li>• Notify management immediately</li>
                  <li>• Document disposal process</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                  <span className="mr-2">⚠️</span> Warning Items (8-15 days)
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Create promotion/discount (20-40%)</li>
                  <li>• Prioritize in sales recommendations</li>
                  <li>• Consider returns to supplier</li>
                  <li>• Increase visibility in store</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-medium text-blue-700 mb-2 flex items-center">
                  <span className="mr-2">👁️</span> Monitor Items (16-30 days)
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Flag for weekly review</li>
                  <li>• Adjust future ordering quantities</li>
                  <li>• Monitor sales patterns</li>
                  <li>• Plan for gradual reduction</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-blue-200">
              <h4 className="font-medium text-blue-700 mb-3">📋 Quick Actions</h4>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-white border border-blue-300 text-blue-600 rounded-md hover:bg-blue-50">
                  Generate Expiry Report
                </button>
                <button className="px-4 py-2 bg-white border border-red-300 text-red-600 rounded-md hover:bg-red-50">
                  Bulk Mark for Disposal
                </button>
                <button className="px-4 py-2 bg-white border border-green-300 text-green-600 rounded-md hover:bg-green-50">
                  Create Promotion Bundle
                </button>
                <button className="px-4 py-2 bg-white border border-purple-300 text-purple-600 rounded-md hover:bg-purple-50">
                  Email Alert to Team
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpiringStock;