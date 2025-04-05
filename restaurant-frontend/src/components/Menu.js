import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

// Ensure that this is the correct backend URL for fetching and adding menu items
const API_URL = "/api/menuItems"; // Proxy will handle the full URL

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "" });

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

  // Function to add a new item to the menu
  const addItem = async () => {
    if (!newItem.name || !newItem.price) return; // Validate that name and price are filled
    try {
      await axios.post(API_URL, newItem); // Sending the new item to the backend
      setNewItem({ name: "", price: "" }); // Reset the form
      fetchMenu(); // Refresh the menu list
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Function to delete an item from the menu
  const deleteItem = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`); // Delete the item by ID
      fetchMenu(); // Refresh the menu list
    } catch (error) {
      console.error("Error deleting item:", error);
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
            <Button variant="destructive" onClick={() => deleteItem(item._id)}>
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
