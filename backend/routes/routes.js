const recipe = require("./recipe");

module.exports = app => {
  app.use("/api/recipes", recipe);
};
