const mongoose = require("mongoose");

const userRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    age: {
      type: Number,
      minlength: 1,
      maxlength: 3,
      required: [true, "Age is required"],
    },
    role: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userRegistrationSchema);
module.exports = User;
