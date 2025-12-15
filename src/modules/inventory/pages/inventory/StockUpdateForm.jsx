import React, { useState } from 'react';


export default function StockUpdateForm({ current, onSave, onCancel }) {
const [qty, setQty] = useState(current);


return (
<div className="fixed inset-0 bg-black/40 flex items-center justify-center">
<div className="bg-white p-4 rounded-lg w-72">
<h3 className="font-semibold mb-3">Update Stock</h3>
<input
type="number"
value={qty}
onChange={(e) => setQty(Number(e.target.value))}
className="w-full p-2 border rounded"
/>
<div className="flex justify-end gap-2 mt-4">
<button onClick={onCancel} className="px-3 py-1 border rounded">Cancel</button>
<button
onClick={() => onSave(qty)}
className="px-3 py-1 border rounded"
>
Save
</button>
</div>
</div>
</div>
);
}
