const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 13280;

const publicPath = path.normalize(__dirname + "/public");

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  next();
});


var routes = require("./routes/routes")(app);

app.all('/*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});


const server = app.listen(port);
server.on('listening', () => {
    console.log(`Server running on ${port}`);
})