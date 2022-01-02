//this file is for handling database via cloud, which stores mongodb database
const mongoose = require('mongoose');

//not good practice to expose the password
//so use .env file and set the variables for it
// const connectionString = 'mongodb+srv://abhay:1234@nodeexpressproject.vbysn.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'


//create a function that gets called by the app.js
//once successfully connected then run the server
// const connectDB = (url) =>{
// 	return mongoose.connect(connectionString, {
// 		useNewUrlParser: true,
// 		useCreateIndex: true,
// 		useFindAndModify: false, 
// 		useUnifiedTopology: true,
// 	})
// }

//with the .env
const connectDB = (url) =>{
	return mongoose.connect(url, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false, 
		useUnifiedTopology: true,
	})
}

module.exports = connectDB
	
