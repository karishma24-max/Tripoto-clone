const mongoose = require("mongoose");
 
const querrySchema = new mongoose.Schema(
  {
     name: {
      type: String,
      trim: true,
      required: true,
    },
    contact: {
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
     city:{
        type: String,
        unique: true,
        required: true,
        trim: true,
         
    },
    adult:{
        type: Number,
        unique: true,
        required: true,
        trim: true,
         
    },
    children:{
        type: Number,
        unique: true,
        required: true,
        trim: true,
         
    },
    room:{
        type: Number,
        unique: true,
        required: true,
        trim: true,
         
    },
    date:{
        type: String,
        unique: true,
        required: true,
        trim: true,
         
    },
  },
  { versionKey: false }
);

const Querry = mongoose.model("query", querrySchema);
module.exports = Querry;
