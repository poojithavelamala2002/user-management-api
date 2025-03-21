// Import mongoose to define the schema and interact with MongoDB
const mongoose = require("mongoose");

// Define the User schema with necessary fields and validations
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Ensures the name field is mandatory
    trim: true, // Removes unnecessary spaces
  },
  email: {
    type: String,
    required: true, // Ensures email is mandatory
    unique: true, // Prevents duplicate emails in the database
    trim: true,
    lowercase: true, // Converts email to lowercase for consistency
  },
  age: {
    type: Number,
    required: true, // Ensures age is mandatory
    min: 0, // Prevents negative age values
  },
  username: {
    type: String,
    required: true, // Ensures username is mandatory
    unique: true, // Each user should have a unique username
    trim: true,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps automatically

// Export the User model for use in other parts of the application
module.exports = mongoose.model("User", UserSchema);

