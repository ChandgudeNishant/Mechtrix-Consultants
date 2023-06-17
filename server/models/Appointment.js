const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
    contact: {
		type: String,
		required: true,
		unique: true,
	},
    department: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Appointment", appointmentSchema);
