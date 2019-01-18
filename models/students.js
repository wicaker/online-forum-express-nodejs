const Sequelize = require('sequelize');

const sequelize = require('../util/databases');

const Students =  sequelize.define('students', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name:{
    type: Sequelize.STRING,
    allowNullL:false
  },
  nim:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = Students;