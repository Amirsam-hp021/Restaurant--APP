const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // To parse incoming JSON requests
app.use(cors()); // Enable CORS for all origins

// Import routes
const menuItemRoutes = require("./routes/menuItemRoutes");
const orderRoutes = require("./routes/orderRoutes");
const homeRoutes = require("./routes/homeRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Use routes
app.use("/api/menuItems", menuItemRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/contact", contactRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if MongoDB connection fails
  });

// Function to validate and start the server on an available port
function findAvailablePort(startPort, callback) {
  const server = http.createServer();
  server
    .listen(startPort, (err) => {
      if (err) {
        findAvailablePort(startPort + 1, callback); // Try the next port
      } else {
        server.close(() => {
          callback(startPort); // Port is available, return it
        });
      }
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        findAvailablePort(startPort + 1, callback); // Port is in use, try next one
      }
    });
}

// Validate the port from the .env file or use default (5000)
let portFromEnv = process.env.PORT || 5000;

// Ensure the port number is valid (must be a number between 0 and 65535)
portFromEnv = parseInt(portFromEnv, 10);
if (isNaN(portFromEnv) || portFromEnv < 0 || portFromEnv > 65535) {
  console.error("Invalid port number. Please check your .env file.");
  process.exit(1); // Exit if the port number is invalid
}

// Start the server on an available port
findAvailablePort(portFromEnv, (port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
