'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('games_type', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      type: {
        type: Sequelize.DataTypes.ENUM(
          'action',
          'rpg',
          'Sandbox',
          'adventure',
          'rts',
        ),
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    return await queryInterface.dropTable('games_type');
  },
};
