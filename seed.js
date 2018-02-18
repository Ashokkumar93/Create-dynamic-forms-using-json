var Form = require('./app/models/Form.js');
var fs = require('fs');

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/mymemberdatabase');

var parsedForm = fs.readFileSync("./app/seeds/form.json");
var newForm = new Form({
    name: "member",
    form: parsedForm
});


newForm.save(function (err) {
    if (err) throw err;

    console.log("Data seeded.");
    process.exit();
});