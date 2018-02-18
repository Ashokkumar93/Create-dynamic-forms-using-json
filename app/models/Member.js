var mongoose = require("mongoose");

var memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 1,
        max: 99,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String
    },
    note: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Member', memberSchema);