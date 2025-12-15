import React, { useState } from 'react';
import StockUpdateForm from './StockUpdateForm';


export default function InventoryItem({ item, onUpdateStock }) {
const [open, setOpen] = useState(false);


return (
<div className="p-4 border rounded-lg flex justify-between items-center">
<div>
<div className="font-semibold">{item.name}</div>
<div className="text-sm text-gray-600">SKU: {item.sku}</div>
<div className="text-sm">Stock: {item.stock}</div>
</div>
<div className="flex gap-2">
<button
onClick={() => setOpen((v) => !v)}
className="px-3 py-1 border rounded"
>
Update
</button>
</div>
{open && (
<StockUpdateForm
current={item.stock}
onSave={(qty) => {
onUpdateStock(item.id, qty);
setOpen(false);
}}
onCancel={() => setOpen(false)}
/>
)}
</div>
);
}
