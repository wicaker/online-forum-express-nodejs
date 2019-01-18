const Sequelize = require('sequelize');
const keys = require('../config/keys');


const sequelize = new Sequelize('forum_discussion', keys.user, keys.password, {
  host: keys.host,
  dialect: 'mysql'
});


module.exports = sequelize;