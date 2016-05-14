var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a reservation in the db
var Reservation= sequelize.define("reservation", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: Sequelize.STRING,
	},
	phoneNumber: {
		type: Sequelize.INTEGER,
	},
	email: {
		type: Sequelize.STRING,
	},
	
});

//  DB
Reservation.sync();

module.exports = Reservation;