module.exports = function(sequelize, DataTypes) {
  var Business = sequelize.define("Business", {
    name: DataTypes.STRING,
    confirmationNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    type: DataTypes.STRING
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
