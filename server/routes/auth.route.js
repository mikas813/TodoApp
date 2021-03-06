const {Router} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const router = Router();

// /api/auth/register
router.post('/register', async (req, res) => {
	try {

		const {email, password} = req.body;

		const userExists = await User.find({email});

		if (!userExists) {
			return res.status(400).json({message: 'User with this email already exist.'})
		}

		const hachedPassword = await bcrypt.hash(password, 12);

		const user = new User({email, password: hachedPassword});

		await user.save();

		res.status(201).send({message: 'Account created.'})

	} catch (e) {
		res.status(500).json({message: 'Something went wrong, please try again!' + e.message});
		console.log(e.message);
	}
});

// /api/auth/login
router.post('/login', async (req, res) => {

});

module.exports = router;