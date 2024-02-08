'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      product_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.STRING,
        references: {
          model: 'categories',
          key: 'category_id'
        }
      },
      seller_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'sellers',
          key: 'seller_id'
        }
      },
      product_image_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'product_images',
          key: 'product_image_id'
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      name_lower: {
        allowNull: false,
        type: Sequelize.STRING
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      weight: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};