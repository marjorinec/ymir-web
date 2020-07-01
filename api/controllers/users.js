module.exports = (app) => {
  const usersDB = require("../data/users.json");
  const controller = {};

  app.get("/api/v1/users", (req, res) => {
    res.send("users wooooo");
  });

  controller.listUsers = (req, res) => res.status(200).json(usersDB);

  return controller;
};
