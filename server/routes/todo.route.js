const Todo = require('../models/Todo');
const express = require('express');
const router = express.Router();

router.get('/:_id', async (req, res) => {
	// req.params._id
	try {
		const todo = await Todo.find({projectId: req.params._id});
		res.send(todo)
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error.message);
	}
});

router.put('/:_id', async (req, res) => {
	const {_id} = req.params;
	try {
		const todo = await Todo.findByIdAndUpdate({_id}, {isCompleted: true});
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
		res.status(500).json({message: "Todo's name is required."});
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