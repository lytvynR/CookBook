const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const publicPath = path.normalize(__dirname + "/public");

app.use(express.static(publicPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/routes")(app);

app.all('/*', function(req, res, next) {
    res.sendFile('/public/index.html', { root: __dirname });
});


const server = app.listen(13280);
