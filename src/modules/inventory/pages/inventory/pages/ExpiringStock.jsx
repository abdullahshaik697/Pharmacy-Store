import React from 'react';
import useInventory from '../hooks/useInventory';


export default function ExpiringStock() {
const { expiringSoon } = useInventory();


return (
<main className="container mx-auto p-6">
<h1 className="text-2xl font-bold mb-4">Expiring Stock</h1>
{expiringSoon.length === 0 ? (
<div className="p-4 border rounded">No items expiring soon.</div>
) : (
<ul className="space-y-2">
{expiringSoon.map((i) => (
<li key={i.id} className="p-3 border rounded">
<div className="font-medium">{i.name}</div>
<div className="text-sm text-gray-600">Expires on: {i.expiryDate}</div>
</li>
))}
</ul>
)}
</main>
);
}
