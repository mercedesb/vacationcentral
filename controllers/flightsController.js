const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    console.log("in find all flights trip controller", req.query);
    db.Flight
      .findAll({where: req.query})
      .then(dbModel => {
        console.log("flightController: ", dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },

  // findTrip: function(req, res) {
  //   console.log("flight find all controller", req.params.id)
  //   db.Flight
  //     .findAll({TripId: req.params.id})
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

  create: function(req, res) {
    console.log("create flight", req.body)
    db.Flight
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("update flight", req.body)
    db.Flight
      .update(
        req.body,
        {returning: true, where: {id: req.params.id} }
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
