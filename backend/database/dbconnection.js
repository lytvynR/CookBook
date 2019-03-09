const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cookbook', { useNewUrlParser: true })
.then(() => {
  console.log('Successfully connected to db.')})
.catch((err) => {
  console.error(err);
});

module.exports =  mongoose.connection;