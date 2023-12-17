const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "this field is required"],
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "this field is required"],

    match: /.+\@.+\..+/,
  },
  password: {
    type: String,
    minLength: 6,
    required: [true, "this field is required"],
    select: false,
  },
  imgProfile: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
