const db = require("../models");

module.exports = {
  login: function(req, res) {
    db.User
      .findOne({where: {
        email: req.body.email
      }})
      .then(data => {
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
  }
};
