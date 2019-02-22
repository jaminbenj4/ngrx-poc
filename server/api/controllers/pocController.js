'use strict';

var mongoose = require('mongoose');

var Person = mongoose.model('People');

exports.listAllPeople = function(req, res) {
    Person.find({}, function(err, person){
        if (err) {
            res.send(err);
        }
        res.json(person);
    });
};

exports.createPerson = function(req, res){
    var newPerson = new Person(req.body);
    newPerson.save(function(err, person){
        if (err) {
            res.send(err);
        }
        res.json(person);
    });
};

exports.getPerson = function(req, res){
    Person.findById(req.params.personId, function (err, person) {
        if (err) {
            res.send(err);
        }
        res.json(person);
    });
};

exports.updatePerson = function(req, res){
    Person.findOneAndUpdate({_id: req.params.personId}, req.body, {new: true}, function (err, person)   {
        if (err) {
            res.send(err);
        }
        res.json(person);
    });
};

exports.deletePerson = function (req, res) {
    Person.remove({
        _id: req.params.personId
    }, function (err, person) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Task successfully deleted'});
    });
};
