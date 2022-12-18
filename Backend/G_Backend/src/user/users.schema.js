const mongoose = require("mongoose");
const randtoken = require("rand-token");
const usersSchema = new mongoose.Schema(
  {
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
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
     role:{
        type:String,enum:["user","admin"],
        default:"user"
    },
    password: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("user", usersSchema);
module.exports = User;
