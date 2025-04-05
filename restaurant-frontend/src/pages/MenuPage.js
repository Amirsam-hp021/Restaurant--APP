import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import "../css/MenuPage.css"; // make sure this path is correct

// Ensure that this is the correct backend URL for fetching menu items
const API_URL = "/api/menuItems"; // Proxy will handle the full URL

export default function MenuPage() {
  const [menuItems, setMenuItems] = useState([]);

  // Fetch the menu items from the backend API when the component mounts
  useEffect(() => {
    fetchMenu();
  }, []);

  // Function to fetch the menu items
  const fetchMenu = async () => {
    try {
      const res = await axios.get(API_URL);
      setMenuItems(res.data.data); // Ensure this matches the API response structure
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Restaurant Menu</h1>

      {/* Display Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {menuItems.map((item) => (
          <Card
            key={item._id}
            className="p-4 flex justify-between items-center"
          >
            <CardContent>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-gray-600">${item.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
