module.exports = (app) => {
  const controller = require("../controllers/users")();

  app.route("api/v1/users").get(controller.listUsers);
};
