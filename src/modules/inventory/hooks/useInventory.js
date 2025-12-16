import { useEffect, useMemo, useState, useCallback } from 'react';
import { 
  getInventory, 
  updateStock as updateStockService,
  addInventoryItem,
  deleteInventoryItem
} from '../services/inventoryService';

const useInventory = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getInventory();
        setItems(data);
      } catch (err) {
        setError(err.message || 'Failed to load inventory');
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  const updateStock = useCallback(async (id, stock) => {
    try {
      setUpdatingId(id);
      setError(null);
      
      const result = await updateStockService(id, stock);
      
      setItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, stock } : item
        )
      );
      
      return result;
    } catch (err) {
      setError(err.message || 'Failed to update stock');
      throw err;
    } finally {
      setUpdatingId(null);
    }
  }, []);

  const addItem = useCallback(async (itemData) => {
    try {
      setError(null);
      const result = await addInventoryItem(itemData);
      
      setItems(prev => [result.data, ...prev]);
      
      return result;
    } catch (err) {
      setError(err.message || 'Failed to add item');
      throw err;
    }
  }, []);

  const deleteItem = useCallback(async (id) => {
    try {
      setError(null);
      const result = await deleteInventoryItem(id);
      
      setItems(prev => prev.filter(item => item.id !== id));
      
      return result;
    } catch (err) {
      setError(err.message || 'Failed to delete item');
      throw err;
    }
  }, []);

  const expiringSoon = useMemo(() => {
    const today = new Date();
    const thresholdDate = new Date();
    thresholdDate.setDate(today.getDate() + 30); // 30 days from now
    
    return items.filter(item => {
      if (!item.expiryDate) return false;
      
      const expiryDate = new Date(item.expiryDate);
      return expiryDate <= thresholdDate && expiryDate > today;
    }).sort((a, b) => new Date(a.expiryDate) - new Date(b.expiryDate));
  }, [items]);

  const lowStockItems = useMemo(() => {
    return items.filter(item => item.stock <= (item.reorderLevel || 10));
  }, [items]);

  const inventoryValue = useMemo(() => {
    return items.reduce((total, item) => {
      return total + (item.stock * (item.price || 0));
    }, 0);
  }, [items]);

  const categoryStats = useMemo(() => {
    const stats = {};
    items.forEach(item => {
      const category = item.category || 'Uncategorized';
      stats[category] = (stats[category] || 0) + 1;
    });
    return stats;
  }, [items]);

  const refreshInventory = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getInventory();
      setItems(data);
    } catch (err) {
      setError(err.message || 'Failed to refresh inventory');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    items,
    loading,
    error,
    updatingId,
    expiringSoon,
    lowStockItems,
    inventoryValue,
    categoryStats,
    updateStock,
    addItem,
    deleteItem,
    refreshInventory
  };
};

export default useInventory;