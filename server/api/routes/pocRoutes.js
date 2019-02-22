'use strict';
module.exports = function(app) {
  var peopleList = require('../controllers/pocController');

  // peopleList Routes
  app.route('/people')
    .get(peopleList.listAllPeople)
    .post(peopleList.createPerson);


  app.route('/people/:personId')
    .get(peopleList.getPerson)
    .put(peopleList.updatePerson)
    .delete(peopleList.deletePerson);
};