import AppRoutes from "./core/routing/AppRoutes";
import Header from "./shared/components/Header";
import Footer from "./shared/components/Footer";
import "./shared/styles/app.css";

function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;