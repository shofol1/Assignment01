const express = require("express");
const {
  getRandomUser,
  getRandomAllUser,
  saveNewUser,
  updateUser,
  updateBulkUser,
  deleteUser,
} = require("../controllers/users.controller");
const { userValidator, validate } = require("../middlewear/user.validator");
const router = express.Router();

router.get("/user/random", getRandomUser);
router.get("/user/all", getRandomAllUser);
router.post("/user/save", userValidator, validate, saveNewUser);
router.patch("/user/update/:id", updateUser);
router.patch("/user/bulk-update", updateBulkUser);
router.delete("/user/delete/:id", deleteUser);

module.exports = router;
