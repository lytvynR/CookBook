const Repository = require('./repository');
const Recipe = require('../models/recipe');
const connection = require('../database/dbconnection');

function RecipeRepository() {
    Repository.prototype.constructor.call(this);
    this.model = Recipe;
}

RecipeRepository.prototype = new Repository();
module.exports = new RecipeRepository();
