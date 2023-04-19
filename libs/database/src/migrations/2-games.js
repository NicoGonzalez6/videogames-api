'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('games', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      users_score: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      critics_score: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      release_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      image_url: {
        type: Sequelize.DataTypes.STRING,
      },
      description: {
        type: Sequelize.DataTypes.STRING(350),
      },
      game_type_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'games_type',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface) {
    return await queryInterface.dropTable('games');
  },
};
