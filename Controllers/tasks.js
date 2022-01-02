//this is used to bring together all the functionality code in a single file

//writing controller for these
// app.get('/api/v1/tasks')    - get all the tasks
// app.post('/api/v1/tasks')   - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

//1. to get all items
const getAllTasks = (req, res) =>{
	res.send('get all tasks')
}

//2. to create a task
const createTask = (req, res) => {
	res.send('create a task')
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