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

const Users = [{}];

const Kebabs = [



]


Kebab
  .create(Kebabs)
  .then(allKebabs => {
    console.log(`Kebab Shop is added`)
    mongoose.connection.close()
  })
  .catch(error => {
    throw new Error(`Kebab shop is not added. ${error}`)
  })