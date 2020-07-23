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
    // role: {
    //   enum: ['user', 'provider'],
    // },
    incompetence: [],
    competence: [],
    // incompetence: [['speaking'], ['writing'], ['walking']],
    // competence: [['speaking'], ['writing'], ['walking']],
    age: req.body.age,
    picture: req.body.picture,
    biography: req.body.bio,
    reviews: [
      {
        user: req.body.user,
        comments: req.body.comments
      }
    ]
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});
 
 
module.exports = router;