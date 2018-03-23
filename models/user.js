module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    user: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
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
  return User;
};