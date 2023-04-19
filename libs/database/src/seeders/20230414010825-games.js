'use strict';
const initial_games = require('../../../../initial_games.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    for (const game of initial_games) {
      const {
        critics_score,
        description,
        image_url,
        name,
        game_type_id,
        release_date,
        users_score,
      } = game;

      await queryInterface.bulkInsert('games', [
        {
          name,
          users_score,
          critics_score,
          game_type_id,
          image_url,
          release_date,
          description,
        },
      ]);
    }
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete('games', null, {});
  },
};
