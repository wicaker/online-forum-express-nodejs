const Sequelize = require('sequelize');
const sequelize = require('../util/databases');

const Taks =  sequelize.define('tasks', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  material:{
    type: Sequelize.STRING,
    allowNullL:true
  },
  challenge:{
    type: Sequelize.STRING,
    allowNull:true
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = Taks;