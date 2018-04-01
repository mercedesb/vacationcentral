const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log(req.query);
    db.Packing
      .findAll({where: req.query})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("in packing controller", req.body);
    db.Packing
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log(req.body);
    db.Packing
      .update(
        req.body,
        {returning: true, where: {id: req.params.id} }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Packing
      .destroy({where: { id: req.params.id }})
      .then(dbModel => res.json("delete successful"))
      .catch(err => {
        console.log("delete err: ", err);
        res.status(422).json(err);
      });
  }
};