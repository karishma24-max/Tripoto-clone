const mongoose = require("mongoose");
const randtoken = require("rand-token");
const usersSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    email:{
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    idToken: {
      type: String,
      default: () => randtoken.generate(64),
    },
    password: {
      type: String,
      required: true,
    },

    photoURL: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

const User = mongoose.model("user", usersSchema);
module.exports = User;
