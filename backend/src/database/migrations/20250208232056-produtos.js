'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao_curta: {
        type: Sequelize.STRING,
        allowNull: true
      },
      descricao_longa: {
        type: Sequelize.STRING,
        allowNull: true
      },
      preco: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      custo: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      codigo_fornecedor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      largura: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      profundidade: {
        type: Sequelize.FLOAT,
        allowNull: true
      },
      fornecedor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull:true
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull:true
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("produtos")
  }
};
