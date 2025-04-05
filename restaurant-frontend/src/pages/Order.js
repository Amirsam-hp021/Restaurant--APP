import axios from "axios";
import React, { useState } from "react";

const Order = () => {
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!customerName || items.length === 0 || total === 0) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Prepare the order data
    const orderData = {
      customerName,
      items,
      total,
    };

    try {
      // Make the API request to submit the order
      const response = await axios.post(
        "http://localhost:5001/api/orders",
        orderData
      );
      if (response.data.success) {
        setMessage("Order placed successfully!");
        // Reset the form fields
        setCustomerName("");
        setItems([]);
        setTotal(0);
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      setMessage("Error submitting the order. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Place an Order</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="customerName"
          >
            Customer Name
          </label>
          <input
            id="customerName"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="items">
            Items (comma separated)
          </label>
          <input
            id="items"
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            value={items}
            onChange={(e) => setItems(e.target.value.split(","))}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="total">
            Total
          </label>
          <input
            id="total"
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            value={total}
            onChange={(e) => setTotal(Number(e.target.value))}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit Order
        </button>
      </form>

      {message && <p className="mt-4 text-center text-red-500">{message}</p>}
    </div>
  );
};

export default Order;
