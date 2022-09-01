const express = require("express");
const {
  getRandomUser,
  getRandomAllUser,
  saveNewUser,
} = require("../controllers/users.controller");
const { userValidator, validate } = require("../middlewear/user.validator");
const router = express.Router();

router.get("/user/random", getRandomUser);
router.get("/user/all", getRandomAllUser);
router.post("/user/save", userValidator, validate, saveNewUser);

module.exports = router;
