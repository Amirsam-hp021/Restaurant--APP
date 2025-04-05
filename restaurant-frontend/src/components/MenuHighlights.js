import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/MenuHighlights.css"; // ✅ Import CSS

const MenuHighlights = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/menu")
      .then((res) => setMenuItems(res.data.data || res.data))
      .catch((err) => console.error("Failed to fetch menu items:", err));
  }, []);

  return (
    <section className="menu-highlights-section">
      <h2>Featured Dishes</h2>
      <div className="menu-grid">
        {menuItems.slice(0, 6).map((item) => (
          <div className="menu-card" key={item._id}>
            <img
              src={item.imageUrl || "https://source.unsplash.com/400x300/?food"}
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <p className="price">${item.price.toFixed(2)}</p>
            <p className="desc">
              {item.description || "Delicious handcrafted dish."}
            </p>
          </div>
        ))}
      </div>
      <a href="/menu" className="view-menu-btn">
        View Full Menu
      </a>
    </section>
  );
};

export default MenuHighlights;
