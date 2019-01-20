const Sequelize = require('sequelize');

const sequelize = require('../util/databases');

const Answers =  sequelize.define('answers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  answer_result: {
    type: Sequelize.STRING,
    allowNull: true
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = Answers;