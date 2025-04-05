import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage"; // ✅ This is the good one!
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />{" "}
          {/* ✅ keep this one only */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
