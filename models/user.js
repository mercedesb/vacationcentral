module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    userName: {
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: {len: [1, 10]}, 
      unique: true
    },
    email: {
      type: DataTypes.STRING, 
      alidate: {isEmail: true}, 
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
  return User;
};