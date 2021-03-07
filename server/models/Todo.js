const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	todoName: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 200,
	},
	projectId: {
		type: mongoose.ObjectId, ref: 'Project',
		minLength: 3,
		maxLength: 200
	},
	isCompleted: {type: Boolean, default: false},
	startDate: {type: Date, default: new Date()},
	finishDate: {type: Date}
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;