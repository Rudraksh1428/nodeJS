const express = require("express");

const{logReqRes} = require("./middlewares")

const app = express();


const PORT = 8000;

const {connectMongoDB} = require('./connection')

const userRouter = require("./routes/user")

connectMongoDB = ("mongodb://127.0.0.1:27017/learn")


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", userRouter);
app.use(logReqRes)
app.listen(PORT, () => {
  console.log("Server is running");
});
