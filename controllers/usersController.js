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
    console.log("controller", req.body);
    db.User
      .create(req.body)
      .then(data => res.redirect(307, "/api/users/login"))
      .catch(err => {
        console.log("err", err.errors[0].message);
        res.status(422).json(err)
        });
  }
};
