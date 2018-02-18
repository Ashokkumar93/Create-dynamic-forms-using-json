var path = require('path');
var Member = require("../models/Member.js");
var Form = require("../models/Form.js");

module.exports = function (app) {
    // routes
    app.get('/', defaultRoute);
    app.get('/jsonform', jsonform);
}

// route handlers
function defaultRoute(req, res) {

    Member.find({}, function (err, results) {
        console.log(results);
        res.render("index.ejs", {
            "results": (results)
        });
    });
}

function jsonform(req, res) {
    Form.find({
        "name": "member"
    }, function (err, doc) {
        if (err) throw err;
        console.log("\n\n\n\n\n\n\n", doc, "\n\n\n\n\n\n\n\n");
        res.send(doc);
    });

}