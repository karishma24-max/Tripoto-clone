require("dotenv").config();
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;

const connect = mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// const connect = async()=>{
//     return mongoose.connect(DB_URL)
// }

module.exports = connect;
