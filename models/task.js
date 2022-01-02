//schema for the database 
//mongoose is used because it provides API to many static functions
//this help in easily interfacing with the mongodb database
const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
	//schema is a key value pair
	//key - name of the variable, value is the type of the variable
	// name : String,
	// completed : Boolean,

	////with validation scheme, this ensures that the properties holds right when data is sent in
	//create as object
	name : {
		type: String,
		required: [true, 'cannot be empty, must provide value'],
		trim: true,
		maxlength: [20, 'name cannot exceed more than 20 characters'],
	},
	completed: {
		type: Boolean, 
		default: false,
	},
})

//export the schema, so that the controller which performs operation based on the request
//can make use of the database
//exporting a model
module.exports = mongoose.model('Task', TaskSchema)