import { useEffect, useMemo, useState } from 'react';
setLoading(false);
});
return () => (mounted = false);
}, []);


useEffect(() => {
// persist locally whenever items change
cartService.saveCart(items);
}, [items]);


const subtotal = useMemo(() => items.reduce((s, it) => s + it.price * it.quantity, 0), [items]);


const addItem = async (newItem) => {
setItems((cur) => {
const idx = cur.findIndex((i) => i.id === newItem.id);
if (idx > -1) {
const updated = [...cur];
updated[idx] = { ...updated[idx], quantity: updated[idx].quantity + (newItem.quantity || 1) };
return updated;
}
return [...cur, { ...newItem, quantity: newItem.quantity || 1 }];
});
try {
await cartService.addToCart(newItem);
} catch (e) {
console.error('Add item failed', e);
}
};


const removeItem = async (id) => {
setItems((cur) => cur.filter((i) => i.id !== id));
try {
await cartService.removeFromCart(id);
} catch (e) {
console.error('Remove failed', e);
}
};


const updateQuantity = async (id, quantity) => {
setItems((cur) => cur.map((i) => (i.id === id ? { ...i, quantity } : i)));
try {
await cartService.updateCartItem(id, quantity);
} catch (e) {
console.error('Update qty failed', e);
}
};


const clearCart = async () => {
setItems([]);
try {
await cartService.clearCart();
} catch (e) {
console.error('Clear cart failed', e);
}
};


return {
items,
loading,
subtotal,
addItem,
removeItem,
updateQuantity,
clearCart,
};
}
