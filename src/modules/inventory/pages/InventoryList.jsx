import useInventory from '../hooks/useInventory';
import InventoryItem from '../components/InventoryItem';


export default function InventoryList() {
const { items, loading, updateStock } = useInventory();


if (loading) return <div className="p-6">Loading inventory...</div>;


return (
<main className="container mx-auto p-6">
<h1 className="text-2xl font-bold mb-4">Inventory</h1>
<div className="space-y-3">
{items.length === 0 && (
<div className="p-4 border rounded text-gray-600">No items in inventory.</div>
)}
{items.map((item) => (
<InventoryItem key={item.id} item={item} onUpdateStock={updateStock} />
))}
</div>
</main>
);
}
