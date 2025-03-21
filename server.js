// Import required modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Initialize Express app
const app = express();

// Middleware for handling CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// User routes
app.use("/api/users", userRoutes);

/**
 * @route   GET /
 * @desc    Root endpoint - API status check
 * @access  Public
 */
app.get("/", (req, res) => {
  res.send("User Management API is running...");
});

// Define the port from environment variables or use default 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
