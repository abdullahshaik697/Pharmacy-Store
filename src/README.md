# 📦 Pharmacy Store Frontend

A modular, scalable, and clean frontend architecture built using **React.js** for an intermediate-level pharmacy E‑commerce store. The project is structured using industry‑standard practices such as modules, shared UI components, service layers, hooks, and a centralized core system for routing and API handling.

---

## 🚀 Tech Stack

* **React.js** (Vite or CRA)
* **React Router** for routing
* **Axios** for API handling
* **CSS Framework (Tailwind / Bootstrap / Custom CSS)**
* **Modular folder architecture**
* **Reusable components**

---

# 📁 Project Structure

Below is the complete folder structure of the project.

```
/src
├─ /shared
│   ├─ components/
│   │   ├─ Header.jsx
│   │   ├─ Footer.jsx
│   │   ├─ Navbar.jsx
│   │   ├─ Button.jsx
│   │   └─ Loader.jsx
│   ├─ utils/
│   │   ├─ formatPrice.js
│   │   └─ validators.js
│   └─ constants/
│       └─ categories.js

├─ /modules/products
│   ├─ components/
│   │   ├─ ProductCard.jsx
│   │   ├─ ProductFilter.jsx
│   │   └─ ProductSearch.jsx
│   ├─ pages/
│   │   ├─ ProductList.jsx
│   │   └─ ProductDetails.jsx
│   ├─ hooks/
│   │   └─ useProducts.js
│   ├─ services/
│   │   └─ productService.js
│   └─ index.js

├─ /modules/cart
│   ├─ components/
│   │   ├─ CartItem.jsx
│   │   └─ CartSummary.jsx
│   ├─ pages/
│   │   └─ CartPage.jsx
│   ├─ hooks/
│   │   └─ useCart.js
│   ├─ services/
│   │   └─ cartService.js
│   └─ index.js

├─ /modules/orders
│   ├─ pages/
│   │   ├─ Checkout.jsx
│   │   └─ OrderSuccess.jsx
│   ├─ hooks/
│   │   └─ useOrder.js
│   ├─ services/
│   │   └─ orderService.js
│   └─ index.js

├─ /modules/auth
│   ├─ pages/
│   │   ├─ Login.jsx
│   │   └─ Register.jsx
│   ├─ hooks/
│   │   └─ useAuth.js
│   ├─ services/
│   │   └─ authService.js
│   └─ index.js

├─ /core
│   ├─ api/
│   │   └─ http.js
│   ├─ config/
│   │   └─ appConfig.js
│   ├─ routing/
│   │   └─ routes.jsx

├─ index.html
├─ main.jsx
```

---

# 🟦 Shared Module

Contains all reusable UI components, constants, and utilities used across all modules.

* **components** → Header, Footer, Navbar, Buttons, Loader
* **utils** → Utility functions like price formatting & validators
* **constants** → Static data (categories for product filtering, etc.)

---

# 🟩 Products Module

Handles everything related to product display.

* Product listing
* Product details
* Filters & search
* Product service to fetch data

### Pages:

* **ProductList.jsx**
* **ProductDetails.jsx**

---

# 🟧 Cart Module

Handles cart operations.

* Add to cart
* Remove items
* Summary & totals

### Pages:

* **CartPage.jsx**

---

# 🟥 Orders Module

Checkout and order confirmation flow.

### Pages:

* **Checkout.jsx**
* **OrderSuccess.jsx**

---

# 🟪 Auth Module

User login/register system.

### Pages:

* **Login.jsx**
* **Register.jsx**

---

# 🟨 Core System Module

Responsible for all the global system-level logic.

### Includes:

* **http.js** → Axios instance + token + interceptors
* **appConfig.js** → Global config (API base URL)
* **routes.jsx** → All app routes

---

# 🧪 Scripts

Typical scripts:

```
npm install
npm run dev
```

---

# 📌 How to Run the Project

1. Clone the repo

```
git clone https://github.com/abdullahshaik697/Pharmacy-Store
```

2. Install dependencies

```
npm install
```

3. Start the dev server

```
npm run dev
```

---

# 📞 Contact / Developer Notes

This project is developed collaboratively under an internship assignment. Each module is handled independently but integrated together.
