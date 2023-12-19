const router = require("express").Router();
const { User } = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err)); // Corrected this line
});

router.route("/").post((req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const gender = req.body.gender;
  const contact = req.body.contact;
  const fee = req.body.fee;
  const slot = req.body.slot;

  const newUser = new User({
    name,
    age,
    gender,
    contact,
    fee,
    slot,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
