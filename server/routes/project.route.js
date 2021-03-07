const Project = require('../models/Project');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const project = await Project.find();
		res.send(project)
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error.message);
	}
});

router.post('/', async (req, res) => {

	const {projectName, author, userId} = req.body;
	let project = new Project({
		projectName,
		author,
		userId,
	});

	try {
		project = await project.save();
		res.send(project)
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error.message);
	}
});

router.delete('/:_id', async (req, res) => {
	try {
		const deletedProject = await Project.findByIdAndDelete(req.params);
		res.send(deletedProject)
	} catch (error) {
		res.status(500).send(error.message);
		console.log(error.message);
	}
});

module.exports = router;