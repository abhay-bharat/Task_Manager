//this is the routes handling file
const express = require('express')
const router = express.Router()
const {getAllTasks, createTask, getSingleTask, updateTask, deleteTask} = require('../Controllers/tasks.js')

//route for the get request 
//without using controllers
// router.route('/').get((req, res) =>{
// 	res.send('all items')
// })

//with controllers
//chaning get all task and post task together as both have same routes
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask)

module.exports = router 