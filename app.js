var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var path = require('path');
mongoose.connect('mongodb://localhost/mymemberdatabase');
var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs'); // set up ejs for templating
app.set('views', path.join(__dirname, '/app/views'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/app'));

try { // creating controllers

  require("./app/controllers/pathprovider.js")(app);
  require("./app/controllers/crud.js")(app);


  app.listen(4000, function (err) {
    if (err) {
      throw err;
    }
    console.log("The application is running on port 4000.");
  });
} catch (e) {
  console.log(e);
}