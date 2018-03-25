module.exports = function(sequelize, DataTypes) {
  var Flight = sequelize.define("Flight", {
    confirmationNumber: DataTypes.STRING,
    airline: {type: DataTypes.STRING, allowNull: false},
    flightNumber: {type: DataTypes.STRING, allowNull: false},
    departLocation: {type: DataTypes.STRING, allowNull: false},
    arriveLocation: {type: DataTypes.STRING, allowNull: false},
    departTime: {type: DataTypes.STRING, allowNull: false},
    arriveTime: {type: DataTypes.STRING, allowNull: false},
  });

  Flight.associate = function(models) {
    Flight.belongsTo(models.Trip, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Flight;
};
