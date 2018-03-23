module.exports = function(sequelize, DataTypes) {
  var Flight = sequelize.define("Flight", {
    confirmationNumber: DataTypes.STRING,
    airline: DataTypes.STRING,
    flightNumber: DataTypes.STRING,
    departLocation: DataTypes.STRING,
    arriveLocation: DataTypes.STRING,
    departTime: DataTypes.STRING,
    arriveTime: DataTypes.STRING,
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
