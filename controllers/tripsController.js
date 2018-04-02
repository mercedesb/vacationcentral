const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    console.log("trip find all controller", req.query);
    db.Trip
      .findAll({where: req.query})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("create trip", req.body);
    db.Trip
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("update Trip", req.body);
    db.Trip
      .update(
        req.body,
        {returning: true, where: {id: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
