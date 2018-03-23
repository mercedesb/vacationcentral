module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    text: DataTypes.TEXT
  });

  Comment.associate = function(models) {
    Comment.belongsTo(models.Business, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Comment;
};
