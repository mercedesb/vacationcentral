const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Flight
      .findAll({where: req.query})
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Flight
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Flight
      .update(
        req.body,
        {returning: true, where: {id: req.params.id} }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Flight
      .destroy({ where: {id: req.params.id }})
      .then(dbModel => res.json("delete flight successful"))
      .catch(err => {
        res.status(422).json(err);
      });
    }
};
