const Todo = require('../models/Todo');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const todo = await Todo.find();
		res.send(todo)
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error.message);
	}
});

router.post('/', async (req, res) => {

	const {todoName, finishDate, projectId} = req.body;
	let todo = new Todo({
		todoName,
		finishDate,
		projectId
	});

	try {
		todo = await todo.save();
		res.send(todo)
	} catch (error) {
		res.status(500).json({message: error.message});
		console.log(error.message);
	}
});

router.delete('/:_id', async (req, res) => {
	try {
		const deletedTodo = await Todo.findByIdAndDelete(req.params);
		res.send(deletedTodo)
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error.message);
	}
});

module.exports = router;