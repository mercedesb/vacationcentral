const bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: {
        len: {
          args: [1, 10],
          msg: "Username must be shorter than 10 characters"
          }
        }, 
      unique: true
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Email format is incorrect"
        }}, 
      unique: true
    },
    password: {type: DataTypes.STRING, allowNull: false},
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  });

  User.associate = function(models) {
    User.hasMany(models.Trip, {
      onDelete: "cascade"
    });
    User.hasOne(models.Profile, {
      onDelete: "cascade"
    });
  };
  
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });

  return User;
};