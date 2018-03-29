const db = require("../models");

// Defining methods for the booksController
module.exports = {
  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  login: function(req, res) {
    db.User
      .findOne({where: {
        email: req.body.email
      }})
      .then(data => {
        console.log(data.dataValues);
        res.json({user: {
          id: data.dataValues.id,
          userName: data.dataValues.userName,
          firstName: data.dataValues.firstName,
          lastName: data.dataValues.lastName
        }});
      })
  },

  create: function(req, res) {
    db.User
      .create(req.body)
      .then(data => res.redirect(307, "/api/users/login"))
      .catch(err => res.status(422).json(err));
  },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
