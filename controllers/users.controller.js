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

exports.saveNewUser = (req, res) => {
  users.push(req.body);
  res.json(users);
};
exports.updateUser = (req, res) => {
  const { id } = req.params;
  if (Number(id)) {
    const updatedUser = users.find((user) => user.id === Number(id));
    if (req.body.name) {
      updatedUser.name = req.body.name;
    } else if (req.body.gender) {
      updatedUser.gender = req.body.gender;
    } else if (req.body.contact) {
      updatedUser.contact = req.body.contact;
    } else if (req.body.address) {
      updatedUser.address = req.body.address;
    } else if (req.body.photoUrl) {
      updatedUser.photoUrl = req.body.photoUrl;
    }
    res.json(updatedUser);
  } else {
    res.json({ error: "id not valid!" });
  }
};

exports.updateBulkUser = (req, res) => {
  const { ids } = req.body;
  const { name, gender, contact, address, photoUrl } = req.body;
  const updatedUser = ids.map((id) => {
    return users.find((user) => user.id === Number(id));
  });
  updatedUser.map((user) => {
    user.name = name;
    user.gender = gender;
    user.contact = contact;
    user.address = address;
    user.photoUrl = photoUrl;
  });
  res.json(updatedUser);
};
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  if (Number(id)) {
    const filter = users.filter((user) => user.id !== Number(id));
    res.json(filter);
  } else {
    res.json({ error: "Id is Invalid" });
  }
};
