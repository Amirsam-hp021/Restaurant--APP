import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/MenuPage.css";

const API_URL = "/api/menuItems";

// Emoji icon for category
const getCategoryIcon = (category) => {
  switch (category) {
    case "pizza":
      return "🍕";
    case "sandwich":
      return "🥪";
    default:
      return "🍽️";
  }
};

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await axios.get(API_URL);
      setMenuItems(res.data.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const categories = ["all", "pizza", "sandwich"];

  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>

      {/* Category Filter */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${
              selectedCategory === cat ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Menu List */}
      {loading ? (
        <p className="loading-text">Loading menu...</p>
      ) : filteredItems.length === 0 ? (
        <p className="empty-text">No items found in this category.</p>
      ) : (
        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item._id} className="menu-card">
              <img
                src={
                  item.imageUrl
                    ? item.imageUrl
                    : "https://via.placeholder.com/400x220?text=No+Image"
                }
                alt={item.name || "menu item"}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x220?text=No+Image";
                }}
              />
              <div className="menu-card-content">
                <h3 className="menu-item-name">{item.name}</h3>

                <div className="category-badge">
                  <span className="emoji">
                    {getCategoryIcon(item.category)}
                  </span>
                  <span className="label">{item.category}</span>
                </div>

                <p className="menu-item-price">{item.price} AMD</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
