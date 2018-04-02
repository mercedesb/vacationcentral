const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Profile
      .findAll({where: req.query})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByType: function(req, res) {
      db.Profile
        .findAll({where: req.query})
          .then(dbModel=> res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Profile
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Profile
      .update(
        req.body, 
        {returning: true, where: {id: req.params.id} }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Profile
      .destroy({ where: {id: req.params.id }})
      .then(dbModel => res.json("delete profile successful"))
      .catch(err => {
        res.status(422).json(err);
      });
    }
};
