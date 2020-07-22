const mongoose = require("mongoose")

const Thread = require("../models/Thread")
const User = require("../models/User")

mongoose.connect(process.env.MONGODB_URI||`mongodb://localhost/Database`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Kebab.collection.drop()
//User.collection.drop()

const Users = [
  {
    username: "hans",
    password: "hanshans",
    name: "Hans",
    email: "hans@hans.com",
    role: "provider",
    competence: "default",
    age: 25,
    address: "Kreuzbergstrasse 48, 10965 Berlin Deutschland",
    picture: "https://i.imgur.com/WvWyXBF.jpg",
    biography: "I'm Hans!",
    reviews: [
      {
        user: "Hans",
        comments: "I'm Hans' review"
      }
    ]
  },

  {
    username: "greta",
    password: "gretagreta",
    name: "Greta",
    email: "greta@greta.com",
    role: "user",
    competence: "default",
    age: 24,
    address: "Kreuzbergstrasse 40, 10965 Berlin Deutschland",
    picture: "https://i.imgur.com/WvWyXBF.jpg",
    biography: "I'm Greta!",
    reviews: [
      {
        user: "Greta",
        comments: "I'm Greta's review"
      }
    ]
  }



];

const Thread = []


User
  .create(Users)
  .then(allUsers => {
    console.log(`User is added`)
    mongoose.connection.close()
  })
  .catch(error => {
    throw new Error(`User is not added. ${error}`)
  })

  Thread
  .create(Threads)
  .then(allThreads => {
    console.log(`Thread is added`)
    mongoose.connection.close()
  })
  .catch(error => {
    throw new Error(`Thread is not added. ${error}`)
  })