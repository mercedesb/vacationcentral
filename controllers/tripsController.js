const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Trip
      .findAll({where: req.query})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Trip
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Trip
      .update(
        req.body,
        {returning: true, where: {id: req.params.id}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
