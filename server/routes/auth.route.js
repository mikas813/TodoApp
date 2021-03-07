const {Router} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const router = Router();

router.post('/register',
	check('email', 'Please fill in correct email').isEmail(),
	check('password', 'The password must be at least 6 characters long.').isLength({min: 6}),
	async (req, res) => {
		try {
			const {email, password} = req.body;

			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({errors: errors.array()});
			}

			const userExists = await User.findOne({email});

			if (userExists) {
				return res.status(400).json({message: 'User with this email already exist.'});
			}

			if (password.length < 6) {
				return res.status(400).json({message: 'Password is too short.'});
			}

			const hachedPassword = await bcrypt.hash(password, 12);

			const user = new User({email, password: hachedPassword});

			await user.save();

			res.status(201).send({message: 'Account created.'});

		} catch (e) {
			res.status(500).json({message: `Something went wrong, please try again! ${e.message}`});
			console.log(e.message);
		}
	});

router.post('/login',
	async (req, res) => {

		try {
			const {email, password} = req.body;

			const user = await User.findOne({email});

			if (!user) {
				return res.status(400).json({message: 'Please provide a valid username and password.'});
			}

			const passwordMatch = bcrypt.compareSync(password, user.password);

			if (!passwordMatch) {
				return res.status(400).send({message: 'Please provide a valid username and password.'});
			}

			const token = jwt.sign(
				{userId: user.id},
				config.get('secret_jwt'),
				{expiresIn: '1h'}
			);

			res.json({token, userId: user.id});

		} catch (e) {
			res.status(500).json({message: 'Something went wrong, please try again!'});
		}
	});

module.exports = router;