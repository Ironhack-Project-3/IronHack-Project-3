const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
 
const Thread = require('../models/Thread');
const User = require('../models/User');   
 
 
// POST route => to create a new project
router.post('/project/new', (req, res, next)=>{
 console.log(req.body)
  Thread.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});
 
 router.get("/test",(req,res)=>{
   console.log("wortking?")
 })
module.exports = router;