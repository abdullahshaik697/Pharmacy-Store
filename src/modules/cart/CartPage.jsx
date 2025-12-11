import React from 'react';
item={it}
onRemove={removeItem}
onUpdateQty={updateQuantity}
/>
))
)}


{items.length > 0 && (
<div className="flex gap-3">
<button
onClick={() => addItem({ id: 'demo-123', name: 'Extra item', price: 99.0, quantity: 1 })}
className="px-3 py-2 border rounded"
>
Add demo item
</button>


<button
onClick={clearCart}
className="px-3 py-2 border rounded text-red-600"
>
Clear cart
</button>
</div>
)}
</section>


<aside>
<CartSummary
subtotal={subtotal}
shipping={items.length ? 50 : 0}
tax={subtotal * 0.18}
onCheckout={handleCheckout}
/>
</aside>
</div>
</main>
);
}
