import Product from "./Products";
import Mission from "./Mission";
import FindUs from "./FindUs";
import Events from "./Events";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./Home";



const Header = () => {
    return (
        <Router>
        <nav style={styles.navContainer}>
          <Link to="/Home">Konbini</Link>
          <Link to="/product">Product</Link>
          <Link to="/mission">Mission</Link>
          <Link to="/findus">Find Us</Link>
          <Link to="/events">Events</Link>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/mission" element={<Mission/>} />
          <Route path="/findus" element={<FindUs/>} />
          <Route path="/events" element={<Events/>} />
        </Routes>
      </Router>
    )
}

const styles = {
  navContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    border: '3px solid black',
  }
}
export default Header; 