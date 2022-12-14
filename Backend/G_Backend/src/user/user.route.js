const express = require("express");
const User = require("./users.schema");

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      if (password === user.password) {
        res.send({ token: user.idToken, user });
      } else {
        res.status(401).send("Incorrect email or password");
      }
    } else {
      res.status(402).send("User with this email not found!!");
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

userRouter.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(402).send("Email already exists");
    } else {
      let user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });
      res.send(user);
    }
  } catch (e) {
    res.status(404).send(e);
  }
});

userRouter.get("/login", async (req, res) => {
  return res.send("user");
  let user = await User.find();
  res.send(user);
});
userRouter.get("/login/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let user = await User.findById(id);
  res.send(user);
});

module.exports = userRouter;
