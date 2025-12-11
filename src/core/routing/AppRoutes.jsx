import "./shared/styles/app.css";

const AppRoutes = () => {

    return (
        <>
            <Routes>

         

                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />


                <Route path="/cart" element={<Cart />} />


                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />


                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

        </>
    )
}

export default AppRoutes