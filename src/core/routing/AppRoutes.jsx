const AppRoutes = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<ProductList />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<CartPage />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/order-success" element={<OrderSuccess />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/*" element={<NotFound />} />

      </Routes>
    </>
  );
};

export default AppRoutes;
