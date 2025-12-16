const STORAGE_KEY = 'pharmacy_inventory_v1';

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms));

const validateItem = (item) => {
  const errors = [];
  
  if (!item.name || item.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }
  
  if (item.stock < 0) {
    errors.push('Stock cannot be negative');
  }
  
  if (item.expiryDate && new Date(item.expiryDate) < new Date()) {
    errors.push('Expiry date cannot be in the past');
  }
  
  if (item.price && item.price < 0) {
    errors.push('Price cannot be negative');
  }
  
  return errors;
};

export const getInventory = async () => {
  await delay();
  
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
    
    const seedData = [
      { 
        id: '1', 
        name: 'Paracetamol 500mg', 
        sku: 'MED-001', 
        stock: 150, 
        expiryDate: '2025-12-20',
        category: 'Pain Relief',
        price: 25.50,
        supplier: 'MediCorp',
        reorderLevel: 50,
        costPrice: 18.00,
        createdAt: '2024-01-15'
      },
      { 
        id: '2', 
        name: 'Vitamin C 1000mg', 
        sku: 'VIT-002', 
        stock: 80, 
        expiryDate: '2025-12-18',
        category: 'Vitamins',
        price: 120.75,
        supplier: 'HealthPlus',
        reorderLevel: 30,
        costPrice: 85.50,
        createdAt: '2024-02-10'
      },
      { 
        id: '3', 
        name: 'Hand Sanitizer 500ml', 
        sku: 'SAN-003', 
        stock: 200,
        category: 'Personal Care',
        price: 89.99,
        supplier: 'CleanCare',
        reorderLevel: 100,
        costPrice: 65.00,
        createdAt: '2024-03-05'
      },
      { 
        id: '4', 
        name: 'Blood Pressure Monitor', 
        sku: 'DEV-004', 
        stock: 15,
        category: 'Medical Devices',
        price: 1499.99,
        supplier: 'MediTech',
        reorderLevel: 10,
        costPrice: 1200.00,
        createdAt: '2024-01-20'
      },
      { 
        id: '5', 
        name: 'Amoxicillin 250mg', 
        sku: 'ANT-005', 
        stock: 45, 
        expiryDate: '2025-12-15',
        category: 'Antibiotics',
        price: 65.25,
        supplier: 'PharmaCorp',
        reorderLevel: 20,
        costPrice: 48.00,
        createdAt: '2024-02-28'
      },
      { 
        id: '6', 
        name: 'Bandages (Pack of 10)', 
        sku: 'FIR-006', 
        stock: 120,
        category: 'First Aid',
        price: 45.00,
        supplier: 'MediCorp',
        reorderLevel: 50,
        costPrice: 32.00,
        createdAt: '2024-03-12'
      },
      { 
        id: '7', 
        name: 'Face Masks (Pack of 50)', 
        sku: 'SAF-007', 
        stock: 85, 
        expiryDate: '2026-01-30',
        category: 'Safety',
        price: 199.99,
        supplier: 'SafeGuard',
        reorderLevel: 40,
        costPrice: 150.00,
        createdAt: '2024-02-15'
      },
    ];
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return seedData;
  } catch (error) {
    console.error('Error fetching inventory:', error);
    throw new Error('Failed to load inventory data');
  }
};

export const updateStock = async (id, stock) => {
  await delay();
  
  if (stock < 0) {
    throw new Error('Stock cannot be negative');
  }
  
  try {
    const items = await getInventory();
    const itemIndex = items.findIndex(item => item.id === id);
    
    if (itemIndex === -1) {
      throw new Error('Item not found');
    }
    
    const updatedItem = { ...items[itemIndex], stock };
    const validationErrors = validateItem(updatedItem);
    
    if (validationErrors.length > 0) {
      throw new Error(validationErrors.join(', '));
    }
    
    items[itemIndex] = updatedItem;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    
    return {
      success: true,
      message: 'Stock updated successfully',
      data: updatedItem
    };
  } catch (error) {
    console.error('Error updating stock:', error);
    throw error;
  }
};

export const addInventoryItem = async (itemData) => {
  await delay();
  
  const newItem = {
    id: `ITEM-${Date.now()}`,
    stock: 0,
    ...itemData,
    createdAt: new Date().toISOString().split('T')[0]
  };
  
  const validationErrors = validateItem(newItem);
  if (validationErrors.length > 0) {
    throw new Error(validationErrors.join(', '));
  }
  
  try {
    const items = await getInventory();
    items.unshift(newItem);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    
    return {
      success: true,
      message: 'Item added successfully',
      data: newItem
    };
  } catch (error) {
    console.error('Error adding item:', error);
    throw new Error('Failed to add item to inventory');
  }
};

export const deleteInventoryItem = async (id) => {
  await delay();
  
  try {
    const items = await getInventory();
    const filteredItems = items.filter(item => item.id !== id);
    
    if (filteredItems.length === items.length) {
      throw new Error('Item not found');
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredItems));
    
    return {
      success: true,
      message: 'Item deleted successfully'
    };
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
};

export const searchInventory = async (query) => {
  await delay();
  
  try {
    const items = await getInventory();
    const lowercaseQuery = query.toLowerCase();
    
    return items.filter(item => 
      item.name.toLowerCase().includes(lowercaseQuery) ||
      item.sku.toLowerCase().includes(lowercaseQuery) ||
      item.category?.toLowerCase().includes(lowercaseQuery)
    );
  } catch (error) {
    console.error('Error searching inventory:', error);
    throw new Error('Failed to search inventory');
  }
};

export const getInventoryStats = async () => {
  await delay();
  
  try {
    const items = await getInventory();
    
    const totalItems = items.length;
    const totalValue = items.reduce((sum, item) => sum + (item.stock * (item.price || 0)), 0);
    const lowStockCount = items.filter(item => item.stock <= (item.reorderLevel || 10)).length;
    
    const today = new Date();
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(today.getDate() + 30);
    
    const expiringCount = items.filter(item => {
      if (!item.expiryDate) return false;
      const expiryDate = new Date(item.expiryDate);
      return expiryDate <= thirtyDaysFromNow && expiryDate > today;
    }).length;
    
    const categoryDistribution = {};
    items.forEach(item => {
      const category = item.category || 'Uncategorized';
      categoryDistribution[category] = (categoryDistribution[category] || 0) + 1;
    });
    
    return {
      totalItems,
      totalValue,
      lowStockCount,
      expiringCount,
      categoryDistribution
    };
  } catch (error) {
    console.error('Error getting inventory stats:', error);
    throw new Error('Failed to get inventory statistics');
  }
};