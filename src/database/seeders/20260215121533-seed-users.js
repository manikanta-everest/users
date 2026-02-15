"use strict";

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Devi Manikanta",
        email: "devi@gmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Manikanta Palaparthi",
        email: "maini@rediffmail.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("users", null, {});
  }
};
