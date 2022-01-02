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
const getSingleTask = (req, res) =>{
	res.send('get single task')
}

//4. update a task
const updateTask = (req, res) =>{
	res.send('update a task')
}

//5. delete a task
const deleteTask = (req, res) =>{
	res.send('delete a task')
}

//exporting as an object
module.exports = {
	getAllTasks,
	createTask,
	getSingleTask,
	updateTask,
	deleteTask
}