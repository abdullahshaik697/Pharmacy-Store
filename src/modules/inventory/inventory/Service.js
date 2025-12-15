const STORAGE_KEY = 'orange3_inventory_v1';


const delay = (ms = 200) => new Promise((r) => setTimeout(r, ms));


export async function getInventory() {
await delay();
const raw = localStorage.getItem(STORAGE_KEY);
if (raw) return JSON.parse(raw);
const seed = [
{ id: '1', name: 'Milk', sku: 'MILK-01', stock: 20, expiryDate: '2025-12-20' },
{ id: '2', name: 'Bread', sku: 'BRD-02', stock: 15, expiryDate: '2025-12-18' },
{ id: '3', name: 'Rice', sku: 'RICE-03', stock: 100 },
];
localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
return seed;
}


export async function updateStock(id, stock) {
await delay();
const items = await getInventory();
const next = items.map((i) => (i.id === id ? { ...i, stock } : i));
localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
return next;
}
