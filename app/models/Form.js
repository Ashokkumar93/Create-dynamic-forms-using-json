var mongoose = require("mongoose");

var formSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    form: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Form', formSchema);
