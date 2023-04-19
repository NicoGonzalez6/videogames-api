'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('games_type', [
      {
        type: 'action',
      },
      {
        type: 'rpg',
      },
      {
        type: 'Sandbox',
      },
      {
        type: 'adventure',
      },
      {
        type: 'rts',
      },
    ]);
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('games_type', null, {});
  },
};
