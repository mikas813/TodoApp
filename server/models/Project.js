const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	projectName: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 200,
	},
	author: {
		type: String,
		minLength: 3,
		maxLength: 30
	},
	userId: String,
});

// this Todo is a class
const Project = mongoose.model('Project', todoSchema);//need destruct

module.exports = Project;