module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define("Trip", {
    destination: {type: DataTypes.STRING, allowNull: false},
    start: {type: DataTypes.DATEONLY, allowNull: false},
    end: {type: DataTypes.DATEONLY, allowNull: false}
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
