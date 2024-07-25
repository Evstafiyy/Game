"use strict";
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "admin",
          email: "admin@mail.ru",
          password: await bcrypt.hash("12345",10),
        },
        {
          name: "bibo",
          email: "admin@mail.ru",
          password: await bcrypt.hash("12345",10),
        },
        {
          name: "bobo",
          email: "admin@mail.ru",
          password: await bcrypt.hash("12345",10),
        },
        {
          name: "bim",
          email: "admin@mail.ru",
          password: await bcrypt.hash("12345",10),
        },
        {
          name: "bam",
          email: "admin@mail.ru",
          password: await bcrypt.hash("12345",10),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
