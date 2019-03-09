function Repository() {}

function getAll(callback) {
  var query = this.model.find();
  query.exec(callback);
}

function getOne(id, callback) {
  var query = this.model.findOne({ _id: id });
  query.exec(callback);
}

function create(entityModel, callback) {
  this.model.create(entityModel, (err, data) => {
    callback(err, data);
  });
}

function update(entityModel, callback) {
  entityModel.save(callback);
}

function deleteOne(entityModel, callback) {
  this.model.deleteOne(entityModel, err => {
    callback(err, null);
  });
}

Repository.prototype.getAll = getAll;
Repository.prototype.getOne = getOne;
Repository.prototype.create = create;
Repository.prototype.update = update;
Repository.prototype.deleteOne = deleteOne;
module.exports = Repository;
