const { check, validationResult } = require("express-validator");

exports.userValidator = [
  check("id").not().isEmpty().withMessage("id is missing"),
  check("gender").not().isEmpty().withMessage("gender is missing"),
  check("name").not().isEmpty().withMessage("name is missing"),
  check("contact").not().isEmpty().withMessage("contact is missing"),
  check("address").not().isEmpty().withMessage("address is missing"),
  check("photoUrl").not().isEmpty().withMessage("photoUrl is missing"),
];
exports.userValidator = [
  check("id").not().isEmpty().withMessage("id is missing"),
  check("gender").not().isEmpty().withMessage("gender is missing"),
  check("name").not().isEmpty().withMessage("name is missing"),
  check("contact").not().isEmpty().withMessage("contact is missing"),
  check("address").not().isEmpty().withMessage("address is missing"),
  check("photoUrl").not().isEmpty().withMessage("photoUrl is missing"),
];
exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) {
    res.json({ error: error[0].msg });
  }
  next();
};
