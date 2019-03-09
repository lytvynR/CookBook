const RecipeRepository = require("../repositories/recipe-repository");
const Recipe = require("../models/recipe");

module.exports = {
  getAll: callback => {
    RecipeRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  getOne: (id, res, callback) => {
    RecipeRepository.getOne(id, (err, data) => {
      callback(err, data);
    });
  },

  create: (body, res, callback) => {
    var dateCreation = Date.now();

    const recipe = new Recipe({
      title: body.title,
      description: body.description,
      createdDate: dateCreation,
      modifiedDate: dateCreation
    });

    RecipeRepository.create(recipe, (err, data) => {
      callback(err, data);
    });
  },

  update: (id, body, res, callback) => {
    RecipeRepository.getOne(id, (err, data) => {
      if (!err && data) {
        const recipeVersion = {
          title: data.title,
          description: data.description,
          modifiedDate: data.modifiedDate
        };

        Object.assign(data, body);
        data.previousVersions.push(recipeVersion);
        data.modifiedDate = Date.now();
        RecipeRepository.update(data, callback);
      } else {
        res.status(400);
        res.end();
      }
    });
  },

  deleteOne: (id, res, callback) => {
    RecipeRepository.getOne(id, (err, data) => {
      if (!err && data) {
        RecipeRepository.deleteOne(data, (err, data) => {
          callback(err, data);
        });
      } else {
        res.status(400);
        res.end();
      }
    });
  }
};
