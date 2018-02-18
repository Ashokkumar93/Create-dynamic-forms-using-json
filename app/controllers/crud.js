var Member = require("../models/Member.js");

module.exports = function (app) {
    // routes
    app.post('/member/', create);
    app.delete('/member/', deleteentry);

    // route handlers
    function create(req, res) {

        console.log(req.body);

        if (req.body._id == "") {
            delete req.body._id;
            var newmember = new Member(req.body);

            newmember.save(function (err) {
                if (err) throw err;

                console.log('Member created');

                res.redirect("/");


            });
        } else {
            var id = req.body._id;
            delete req.body._id;
            Member.findByIdAndUpdate(id, req.body, function (err, result) {
                if (err) throw err;
                console.log('Member updated');

                res.redirect("/");
            });
        }


    }

    function deleteentry(req, res) {

        Member.find(req.body).remove(function () {
            console.log("Member deleted");

            res.end();
        });
    }
}