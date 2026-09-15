const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

const mongoose = require("mongoose");

const PORT = 8000;


const userRouter = require("./routes/user")
mongoose
  .connect("mongodb://127.0.0.1:27017/learn")
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => console.log("Error", err));



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Server is running");
});
