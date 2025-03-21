// Import required modules
const express = require("express");
const { 
  createUser, 
  getUsers, 
  getUserById, 
  updateUser, 
  deleteUser 
} = require("../controllers/userController");

const router = express.Router();

/**
 * @route   POST /api/users
 * @desc    Create a new user
 * @access  Public
 */
router.post("/", createUser);

/**
 * @route   GET /api/users
 * @desc    Retrieve all users
 * @access  Public
 */
router.get("/", getUsers);

/**
 * @route   GET /api/users/:id
 * @desc    Retrieve a single user by ID or username
 * @access  Public
 */
router.get("/:id", getUserById);

/**
 * @route   PUT /api/users/:id
 * @desc    Update user details by ID or username
 * @access  Public
 */
router.put("/:id", updateUser);

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete a user by ID or username
 * @access  Public
 */
router.delete("/:id", deleteUser);

// Export the router to use in the main app
module.exports = router;
