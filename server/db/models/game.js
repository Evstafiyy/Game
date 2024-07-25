"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({User, GameLine}) {
      this.belongsTo(User, { foreignKey: "userId" });
      this.hasMany(GameLine, { foreignKey: "gameId" });
    }
  }
  Game.init(
    {
      userId: DataTypes.INTEGER,
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Game",
    }
  );
  return Game;
};
