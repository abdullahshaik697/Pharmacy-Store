import React from 'react';


export default function CartItem({ item, onRemove, onUpdateQty }) {
const handleQtyChange = (e) => {
const qty = Number(e.target.value);
if (qty >= 1) onUpdateQty(item.id, qty);
};


return (
<div className="flex gap-4 items-center p-4 border rounded-lg">
<img
src={item.image || '/placeholder.png'}
alt={item.name}
className="w-16 h-16 object-cover rounded"
/>


<div className="flex-1">
<div className="font-medium">{item.name}</div>
<div className="text-sm text-gray-500">{item.variant || ''}</div>
<div className="mt-2 flex items-center gap-3">
<label className="text-sm">Qty</label>
<input
type="number"
min="1"
value={item.quantity}
onChange={handleQtyChange}
className="w-20 p-1 border rounded text-sm"
/>
</div>
</div>


<div className="text-right">
<div className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</div>
<button
onClick={() => onRemove(item.id)}
className="mt-2 text-sm underline"
aria-label={`Remove ${item.name} from cart`}
>
Remove
</button>
</div>
</div>
);
}
