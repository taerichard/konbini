import "./styles/appStyles.css";
import Footer from "./components/footer/Footer";
import { Routes, Route, useRoutes } from "react-router-dom";
import Main from "./pages/Main";
import Accessories from "./pages/Accessories";
import Disposables from "./pages/Disposables";
import Ecigs from "./pages/Ecigs";
import Juice from "./pages/Juice";
import Mods from "./pages/Mods/Mods";
import Pods from "./pages/Pods";
import Title from "./components/Title";
import Services from "./components/services/Services";
import Products from "./components/products/Products";
import Form from "./components/contact/Form";
import ScrollToTop from "./components/shared/ScrollToTop";

function App() {
  return (
    <div className="container">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="disposables" element={<Disposables />} />
          <Route path="ecigs" element={<Ecigs />} />
          <Route path="juice" element={<Juice />} />
          <Route path="mods" element={<Mods />} />
          <Route path="pods" element={<Pods />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
}

export default App;
