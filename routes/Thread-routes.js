const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Thread = require("../models/Thread");
const User = require("../models/User");

// ----------------------------?????????--------------------------
router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const owner = req.user._id;
  // const comments = []

  Project.create({
    title,
    description,
    owner,
  })
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.json(err);
    });
});

// GET route => to retrieve a specific task
router.get("/users/:userId/threads/:threadId", (req, res, next) => {
  Thread.findById(req.params.threadId)
    .populate("user")
    .then((theThread) => {
      res.json(theThread);
    })
    .catch((err) => {
      res.json(err);
    });
});

// POST route => to create a new task
router.post("/threads", (req, res, next) => {
  console.log("req.body", req.body);
  Thread.create({
    title: req.body.title,
    description: req.body.description,
    user: req.body.userID,
  })
    .then((response) => {
      User.findByIdAndUpdate(req.body.userID, {
        $push: { threads: response._id },
      })
        .then((theResponse) => {
          res.json(theResponse);
        })
        .catch((err) => {
          res.json(err);
        });
    })
    .catch((err) => {
      res.json(err);
    });
});

// PUT route => to update a specific task
router.put("/threads/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Thread.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({
        message: `Thread with ${req.params.id} is updated successfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

// DELETE route => to delete a specific task
router.delete("/threads/:id", (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Thread.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({
        message: `Thread with ${req.params.id} is removed successfully.`,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/threads/:id", (req, res) => {
  Thread.findById(req.params.id).then((threadObject) => {
    res.json(threadObject);
  });
});

router.get("/threads", (req, res, next) => {
  Thread.find()
    .populate("user")
    .then((threads) => {
      res.json(threads);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
