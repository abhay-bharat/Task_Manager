//this is the basic task manager application, 
//it performs get(by displaying all the current tasks)
//post(by adding new tasks)
//delete(by deleting the tasks)
//update (by allowing to edit the tasks)
//basically all the methods are used and CRUD of database is also performed here

//import database handling module
const express = require('express')
const app = express()
const tasks = require('./Routes/tasks')
const connectDB = require('./db/connect')
//access the environment variable
require('dotenv').config()

//middleware
//this middleware is used, because data would be received in the form json 

//now to use the static objects which are here the frontend code in the public folder, use middleware
app.use(express.static('./public'))
app.use(express.json())
//routes

//basic hello get request
// app.get('/hello', (req, res) => {
// 	res.send('Task Manager App')
// })

//it uses the tasks route
app.use('/api/v1/tasks', tasks)

// //some of the basic routes 
// app.get('/api/v1/tasks')    - get all the tasks
// app.post('/api/v1/tasks')   - create a new task
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task


const port = 5000

//spin up the server only when successfully able to connect to db
//create function for it

//asynchronous because first connect to the database
const start = async () =>{
	try{
		console.log('Waiting to connect to MongoDB using Mongoose...')
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`Server is listening on port ${port}...`))
	}
	catch(error){
		console.log(error)
	}
}

//invoke the function 
start()

