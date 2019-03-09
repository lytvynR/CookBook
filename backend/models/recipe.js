const mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now },
  title: String,
  description: String,
  previousVersions: { type: Array, default: [] }
});

recipeSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

recipeSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Recipe', recipeSchema);
