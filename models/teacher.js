const Sequelize = require('sequelize');
const sequelize = require('../util/databases');

const Teacher =  sequelize.define('teacher', {
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
  nip:{
    type: Sequelize.INTEGER,
    allowNull:false
  },
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

module.exports = Teacher;