module.exports = function(sequelize, DataTypes) {
    var Packing = sequelize.define("Packing", {
      name: {type: DataTypes.STRING, allowNull: false},
      toPack: DataTypes.TEXT,
      wishPack: DataTypes.TEXT,
      noPack: DataTypes.TEXT,
    });
  
    Packing.associate = function(models) {
      Packing.belongsTo(models.Trip, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Packing;
  };