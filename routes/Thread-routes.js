const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
 
const Thread = require('../models/Thread');
const User = require('../models/User');   
 
 
// // POST route => to create a new thread
// router.post('/Threads/new', (req, res, next)=>{
//  console.log(req.body)
//   Thread.create({
//     title: req.body.title,
//     description: req.body.description,
//   })
//     .then(response => {
//       res.json(response);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });

// // GET route => to get all the threads 
// router.get('/Threads/new', (req, res, next) => {
//   Thread.find().populate('tasks')
//     .then(allTheThreads => {
//       res.json(allTheThreads);
//     })
//     .catch(err => {
//       res.json(err);
//     })
// });




 
// GET route => to retrieve a specific task
router.get('/users/:userId/threads/:thredId', (req, res, next) => {
  Thread.findById(req.params.threadId)
  .then(theThread =>{
      res.json(theThread);
  })
  .catch( err =>{
      res.json(err);
  })
});
 
// POST route => to create a new task
router.post('/threads', (req, res, next)=>{
  console.log("work", req.body)
  Thread.create({
      title: req.body.title,
      description: req.body.description,  
      user: req.body.userID
  })
    .then(response => {
      console.log("is this the response?")
        User.findByIdAndUpdate(req.body.userID, { $push:{ threads: response._id } })
        .then(theResponse => {
            res.json(theResponse);
        })
        .catch(err => {
          res.json(err);
      })
    })
    .catch(err => {
      res.json(err);
    })
})
 
// PUT route => to update a specific task
router.put('/threads/:id', (req, res, next)=>{
 
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Thread.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Thread with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})
 
// DELETE route => to delete a specific task
router.delete('/threads/:id', (req, res, next)=>{
 
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Thread.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Thread with ${req.params.id} is removed successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})
 
module.exports = router;