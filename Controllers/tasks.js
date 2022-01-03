//this is used to bring together all the functionality code in a single file

//writing controller for these
// app.get('/api/v1/tasks')    - get all the tasks
// app.post('/api/v1/tasks')   - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

const Task = require('../models/task')
//1. to get all items
const getAllTasks = async (req, res) =>{
	try{
		const tasks = await Task.find({}) //providing empty object inside find returns all the available data
		res.status(200).json({tasks})
	}
	catch(error){
		res.status(500).json({msg: error})
	}
}

//2. to create a task
// const createTask = (req, res) => {
// 	res.status(201).send(req.body)
// 	// res.send('create a task')
// }

//2.with connecting to the database
const createTask = async (req, res)=>{
	//creating a task object, which creates a document using the Task model
	//wait till given task isn't created
	try{
		const task = await Task.create(req.body)
		res.status(201).json({ task })
	}
	catch(error){
		res.status(500).json({msg: error})
	}
}

//3. get single task
const getSingleTask = async (req, res) =>{
	try{
		const taskID = req.params.id //get task id from request
		//or
		// const {id: taskID} = req.params
		const task = await Task.findOne({_id: taskID}) //search for that specific task
		if(!task){
			//always use return, incase of the object not found orelse continues with below code execution
			return res.status(404).json({ msg: `No task with id : ${taskID} found`})
		}
		res.status(200).json({task})
	}
	catch(error){
		res.status(500).json({msg: error})
	}
}

//4. update a task
const updateTask = async (req, res) =>{
	try{
		const {id: taskID} = req.params
		//req.body has the values that are to be updated
		const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
			new: true, //always returns back the updated object
			runValidators: true, //runs a check with the validators that are associated with the schema
		})

		if(!task){
			return res.status(404).json({msg: `No task with id : ${taskID} found`})
		}

		res.status(200).json({task})
	}
	catch(error){
		res.status(500).json({msg: error})
	}
}

//5. delete a task
const deleteTask = async (req, res) =>{
	try{
		const {id: taskID} = req.params
		const task = await Task.findOneAndDelete({_id: taskID})
		if(!task){
			return res.status(404).json({msg: `No task with id ${taskID} found` })
		}
		res.status(200).json({task})
	}
	catch(error){
		res.status(500).json({msg: error})
	}
}

//exporting as an object
module.exports = {
	getAllTasks,
	createTask,
	getSingleTask,
	updateTask,
	deleteTask
}