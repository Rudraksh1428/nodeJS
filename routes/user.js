const express = require("express");

const router = express.Router();

const User = require("../models/user");

router.get("/", async (req, res) => {
  const allDbUsers = await User.find({});

  return res.json(allDbUsers);
});

router
  .route("/:id")

  .get(async (req, res) => {
    const id = req.params.id;

    const user = await User.findById(id);

    return res.json(user);
  })

  .put((req, res) => {
    res.json({ Status: "pending" });
  })

  .patch((req, res) => {
    res.json({ Status: "pending" });
  })

  .delete((req, res) => {
    res.json({ Status: "pending" });
  });


router.post("/", async (req, res) => {
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

  const result = await User.create({
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

module.exports = router;
