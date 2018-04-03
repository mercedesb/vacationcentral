module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    type: DataTypes.STRING,
    company: DataTypes.STRING,
    memberNumber: DataTypes.STRING,
    phone: DataTypes.STRING,
    url: DataTypes.STRING,
  });

  Profile.associate = function(models) {
    Profile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Profile;
};
