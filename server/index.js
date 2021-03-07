const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/projects', require('./routes/project.route'));
app.use('/api/todo', require('./routes/todo.route'));

const connect = async () => {
	try {
		await mongoose.connect(config.get('mongo_db_connection_string'), {
			useCreateIndex: true,
			useUnifiedTopology: true,
			useNewUrlParser: true
		});
		app.listen(config.get('port'), () => {
			console.log(`Server started on port: ${config.get('port')} and have been successfully connected to the DB`)
		});
	} catch (e) {
		console.log(e.message);
		process.exit(1)
	}
};

connect();

