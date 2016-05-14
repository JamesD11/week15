var mysql = require('sequilize');

var source= {


localhost:{
    port: 8896,
    host: 'localhost',
    user: 'root',
    password: "root",
    database: "hotRest"
},

jawdb:{
    port: 3306,
    host: 'host here',
    user: 'user id here',
    password: "password",
    database: "database number here"
    }
}

var selectedSource= source.jaws.db


var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
  host: selectedSource.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  module.exports = sequelize;