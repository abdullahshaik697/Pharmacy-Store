const STORAGE_KEY = 'orange3_cart_v1';
console.error('getCart parse error', e);
return [];
}
}


export async function saveCart(items) {
try {
localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
} catch (e) {
console.error('saveCart failed', e);
}
}


export async function addToCart(item) {
await delay();
const cur = await getCart();
const idx = cur.findIndex((i) => i.id === item.id);
if (idx > -1) {
cur[idx].quantity += item.quantity || 1;
} else {
cur.push({ ...item, quantity: item.quantity || 1 });
}
await saveCart(cur);
return cur;
}


export async function removeFromCart(id) {
await delay();
const cur = await getCart();
const next = cur.filter((i) => i.id !== id);
await saveCart(next);
return next;
}


export async function updateCartItem(id, quantity) {
await delay();
const cur = await getCart();
const next = cur.map((i) => (i.id === id ? { ...i, quantity } : i));
await saveCart(next);
return next;
}


export async function clearCart() {
await delay();
await saveCart([]);
return [];
}
