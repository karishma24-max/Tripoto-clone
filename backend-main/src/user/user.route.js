const express = require("express");
const User = require("./users.schema");
const Querry= require("./querry.schema");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.send({
        message: "Invalid-Creadential",
        token: "",
        user: "",
      });
    }
    if (user) {
      //generate token
      const token = jwt.sign({ id: user._id, name: user.name }, "SECRET1234", {
        expiresIn: "10 day",
      }); //this secrete is for signing purpose say that it is valid or not
      // const refreshToken = jwt.sign({}, "REFRESHSECRET", { expiresIn: "28 day" });

      return res.send({
        message: "login succesfull",
        token: token,
        user: user.role,
      });
    }
    return res.send("Invalid  29credential ");
  } catch (e) {
    return res.send(e);
  }
  return res.send("Check try and catch in server ");
});

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.send({ message: "Please enter full Details" });
  }

  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(402).send({ message: "userRegistered already" });
    } else {
      let user = await User.create({
        firstName,
        lastName,
        email,
        password,
        role: "user",
      });
      res.send({ message: "Sucessfully created" });
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

userRouter.get("/login", async (req, res) => {
  let user = await User.find();
  res.send(user);
});

userRouter.get("/login/:id", async (req, res) => {

  try{
    let id = req.params.id;
    console.log(id);
    let user = await User.find({ _id: id });
    res.send(user);
  }catch(e){
res.send(e)
  }
 
});

userRouter.get("/querry",async  (req, res)=>{
try{
  let qry= await Querry.find();
  return  res.send(qry)
}catch(e){
  return  res.send(e)
}
res.send("error backend")

})

userRouter.post("/querry",async  (req, res)=>{
  const {name,email,contact,city,adult,children,room,date}=req.body;
if (!name || !email || !contact || !city|| !adult|| !children|| !room|| !date){
    return res.send({ message: "Please enter full Details" });
  }

  try{
    let qry = await Querry.create({
      name,
      email,
      contact,
      city,
      adult,
      children,
      room,
      date
    });

    return res.send({msg:"Sucessfully created"})
  }catch(e){
    return  res.send(e)
  }
  res.send("error backend")
  
  })

module.exports = userRouter;
