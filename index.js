const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

const mongoose = require("mongoose");

const PORT = 8000;

mongoose
  .connect("mongodb://127.0.0.1:27017/learn")
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => console.log("Error", err));



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/users", (req, resp) => {
  return resp.json(users);
});

app
  .route("/api/users/:id")

  .get((req, resp) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    return resp.json(user);
  })

  .put((req, resp) => {
    resp.json({ Status: "pending" });
  })

  .patch((req, resp) => {
    resp.json({ Status: "pending" });
  })

  .delete((req, resp) => {
    resp.json({ Status: "pending" });
  });

app.post("/api/users", async (req, res) => {
  const body = req.body;

  console.log(body);

  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({
      msg: "All fields are required",
    });
  }

  await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });

  return res.status(201).json({
    status: "success",
    user: result,
  });
});

app.listen(PORT, () => {
  console.log("Server is running");
});
