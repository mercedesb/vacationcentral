module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
    destination: DataTypes.STRING,
    start: DataTypes.DATEONLY,
    end: DataTypes.DATEONLY
  });

  Trip.associate = function(models) {
    Trip.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Trip.hasMany(models.Business, {
      onDelete: "cascade"
    });
    Trip.hasMany(models.Flight, {
      onDelete: "cascade"
    });
  };
  return Trip;
};
