const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const User = require('../models/User');
const Thread = require('../models/Thread');

router.post('../client/src/components/Home.js', (req, res, next)=>{
 
  User.create({
    name: req.body.name,
    email: req.body.email,
    role: [],
    // // role: {
    // //   enum: ['user', 'provider'],
    // // },
    // incompetence: [],
    // competence: [],
    // // incompetence: [['speaking'], ['writing'], ['walking']],
    // // competence: [['speaking'], ['writing'], ['walking']],
    // age: req.body.age,
    // picture: req.body.picture,
    // biography: req.body.bio,
    // reviews: [
    //   {
    //     user: req.body.user,
    //     comments: req.body.comments
    //   }
    // ]
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});
 

// GET route => to get a specific user/detailed view
router.get('/users/:id', (req, res, next)=>{
 
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  // our projects have array of tasks' ids and 
  // we can use .populate() method to get the whole task objects
  //                                   ^
  //                                   |
  //                                   |
  User.findById(req.params.id).populate('threads')
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})
 
// PUT route => to update a specific project
router.put('/users/:id', (req, res, next)=>{
 
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `User with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})
 
// DELETE route => to delete a specific project
router.delete('/users/:id', (req, res, next)=>{
 
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `User with ${req.params.id} is removed successfully.` });
    })
    .catch( err => {
      res.json(err);
    })
})
 
module.exports = router;


 