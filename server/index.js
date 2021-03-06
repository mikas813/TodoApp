const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port');


const connect = async () => {
	try {
		await mongoose.connect(config.get('mongo_db_connection_string'), {
			useCreateIndex: true,
			useUnifiedTopology: true,
			useNewUrlParser: true
		});
		app.listen(PORT, () => {
			console.log(`Server started on port: ${PORT} and have been successfully connected to the DB`)
		});
	} catch (e) {
		console.log(e.message);
		process.exit(1)
	}
};

connect();

