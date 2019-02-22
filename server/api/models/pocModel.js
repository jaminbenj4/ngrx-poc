'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PocPersonSchema = new Schema({
    firstName: {
        type: String,
        required: 'Please enter first name'
    },
    lastName: {
        type: String,
        required: 'Please enter last name'
    },
    email: {
        type: String,
        required: 'Please enter email address'
    }
});

module.exports = mongoose.model('People', PocPersonSchema);