'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      order_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      address_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'addresses',
          key: 'address_id'
        }
      },
      customer_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'customer_id'
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
      payment_method_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'payment_methods',
          key: 'payment_method_id'
        }
      },
      courier_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'couriers',
          key: 'courier_id'
        }
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      total_weight: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      service_fees: {
        type: Sequelize.INTEGER
      },
      total_price: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      order_status: {
        allowNull: false,
        type: Sequelize.ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled'),
        defaultValue: 'pending',
      },
      payment_status: {
        allowNull: false,
        type: Sequelize.ENUM('pending', 'completed', 'failed', 'refunded'),
        defaultValue: 'pending',
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
    await queryInterface.dropTable('Orders');
  }
};