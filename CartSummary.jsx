import React from 'react';


export default function CartSummary({ subtotal, shipping = 0, tax = 0, onCheckout }) {
const total = subtotal + shipping + tax;


return (
<div className="p-4 border rounded-lg max-w-md">
<h3 className="text-lg font-semibold mb-3">Order summary</h3>


<div className="flex justify-between py-1">
<span>Subtotal</span>
<span>₹{subtotal.toFixed(2)}</span>
</div>


<div className="flex justify-between py-1">
<span>Shipping</span>
<span>₹{shipping.toFixed(2)}</span>
</div>


<div className="flex justify-between py-1">
<span>Tax</span>
<span>₹{tax.toFixed(2)}</span>
</div>


<div className="border-t mt-3 pt-3 flex justify-between font-semibold">
<span>Total</span>
<span>₹{total.toFixed(2)}</span>
</div>


<button
onClick={onCheckout}
className="mt-4 w-full py-2 rounded-lg shadow-sm font-medium"
>
Checkout
</button>
</div>
);
}
