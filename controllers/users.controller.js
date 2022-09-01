const users = require("../fakeData/data.json");

exports.getRandomUser = (req, res) => {
  let randomId = Math.round(Math.random() * 4) + 1;
  const randomUser = users.find((user) => user.id === randomId);
  res.json(randomUser);
};
exports.getRandomAllUser = (req, res) => {
  const { limit } = req.query;
  if (limit) {
    res.json(users.slice(0, limit));
  } else {
    res.json(users);
  }
};

exports.saveNewUser = (req, res) => {};
