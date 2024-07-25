"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({Theme, GameLine}) {
      this.belongsTo(Theme, { foreignKey: "themeId" });
      this.hasMany(GameLine, { foreignKey: "questionId" });
    }
  }
  Question.init(
    {
      themeId: DataTypes.INTEGER,
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      img: DataTypes.STRING,
      point: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Question",
    }
  );
  return Question;
};
