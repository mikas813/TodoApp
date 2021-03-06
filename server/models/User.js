const {Schema, model} = require('mongoose');

const schema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		minLength: 6
	},
	todoList: [
		{
			type: String,
			ref: 'Todo'
		}
	]
});

module.exports = model('User', schema);