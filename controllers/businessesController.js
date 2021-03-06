const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Business
      .findAll({where: req.query})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Business
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Business
      .update(
        req.body,
        {returning: true, where: {id: req.params.id} }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Business
      .destroy({where: { id: req.params.id }})
      .then(dbModel => res.json("delete successful"))
      .catch(err => {
        res.status(422).json(err);
      });
  }
};
