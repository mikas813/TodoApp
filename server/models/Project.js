const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	projectName: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 200,
	},
	author: {
		type: mongoose.ObjectId, ref: 'User',
		minLength: 3,
		maxLength: 30
	},
	userId: String,
	todoList: [{type: mongoose.ObjectId, ref: 'TodoLis'}]
});

// this Todo is a class
const Project = mongoose.model('Project', todoSchema);//need destruct

module.exports = Project;