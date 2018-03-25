module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    name: {type: DataTypes.STRING, allowNull: false},
    confirmationNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY,
    type: {type: DataTypes.STRING, allowNull: false}
  });

  Business.associate = function(models) {
    Business.belongsTo(models.Trip, {
      foreignKey: {
        allowNull: false
      }
    });
    Business.hasMany(models.Comment, {
      onDelete: "cascade"
    });
  };
  return Business;
};
