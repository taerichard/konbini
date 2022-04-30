import Product from "./components/Products";
import Mission from "./components/Mission";
import FindUs from "./components/FindUs";
import Events from "./components/Events";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/product">Product</Link>
        <Link to="/mission">Mission</Link>
        <Link to="/findus">Find Us</Link>
        <Link to="/events">Events</Link>
      </nav>
      <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route path="/mission" element={<Mission/>} />
        <Route path="/findus" element={<FindUs/>} />
        <Route path="/events" element={<Events/>} />
      </Routes>
    </Router>
  );
}

export default App;
