const mongoose = require("mongoose")

const Thread = require("../models/Thread")
const User = require("../models/User")

mongoose.connect(process.env.MONGODB_URI||`mongodb://localhost/Database`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch(error => {
  throw new Error(`User is not added. ${error}`)
})

const Users = [
  {
    username: "Hans",
    password: "hanshans",
    name: "Hans",
    email: "hans@hans.com",
    role: "provider",
    skills: ["speaking"],
    age: 25,
    address: "Kreuzbergstrasse 48, 10965 Berlin Deutschland",
    picture: "https://i.imgur.com/UEXOucS.jpg",
    bio: "I'm Hans!",
    reviews: [
      {
        user: "Hans",
        comments: "I'm Hans' review"
      }
    ]
  },

  {
    username: "Greta",
    password: "gretagreta",
    name: "Greta",
    email: "greta@greta.com",
    role: "user",
    skills: ["speaking"],
    age: 24,
    address: "Kreuzbergstrasse 40, 10965 Berlin Deutschland",
    picture: "https://i.imgur.com/tLrKjkp.jpg",
    bio: "I'm Greta!",
    reviews: [
      {
        user: "Greta",
        comments: "I'm Greta's review"
      }
    ]
  },
  {
    username: "Rachel",
    password: "rachelrachel",
    name: "Rachel",
    email: "Rachel.delatorre1@gmail.com",
    role: "user",
    needs: ["speaking"],
    age: 28,
    address: "Reichenbergerstr. 10999 Berlin",
    picture: "https://i.imgur.com/EhSOuAD.jpg",
    bio: "hi, I’m Rachel! I just moved berlin to work in a new job in coding. I’m looking for someone to help me getting started with all the paperwork and German bureaucracy. ",
    reviews: [
      {
        user: "Rachel",
        comments: "I'm Rachel's review"
      }
    ]
  },
  {
    username: "Natasha555",
    password: "natashaisawesome",
    name: "Natasha",
    email: "natasha@nat.com",
    role: "user",
    needs: [['speaking'], ['writing'], ['walking']],
    age: 21,
    address: " Adalbertstraße 9, 10999 Berlin",
    picture: "https://i.imgur.com/5F7ZWPy.jpg",
    bio: "I moved to Berlin because I thought Octoberfest was here. But it was in Munich. Fuck. I'm already stuck here and I have to do bureucracy and I just can't.",
  },
  {
    username: "Mario2839",
    password: "marioisawesome",
    name: "Mario",
    email: "mario@hans.com",
    role: "provider",
    skills: [['speaking'], ['writing'], ['walking']],
    age: 44,
    address: "Badenallee 5 14052 Berlin Deutschland",
    picture: "https://i.imgur.com/IrfgGKA.jpg",
    bio: "I moved to Germany 10 years ago. I went from zero to hero in just 2 years! I rocked German bureucracy and breathed paperwork. I will translate stuff for you and also go to any places with you, because I'm such an an excellent communicator. Payment with €€ or if you are pretty we will see what we can do",
    reviews: [
      {
        user: "Greta",
        comments: "I went to ABH with Mario and it's been the most life-changing experience of my life. It's been such an exciting adventure to travel through the bureaucratic jungle together."
      }
    ]
  },
  {
    username: "georges",
    password: "georgesgeorges",
    name: "Georges",
    email: "georges@georges.com",
    role: "provider",
    skills: ["speaking"],
    age: 25,
    address: "Kreuzbergstrasse 28, 10965 Berlin Deutschland",
    picture: "https://i.imgur.com/DvaAsKE.jpg",
    bio: "I'm Georges!",
    reviews: [{
      user: "Georges",
      comments: "I'm Georges' review"
    }]
  }, 
  {
    username: "Georgette",
    password: "georgettegeorgette",
    name: "Georgette",
    email: "georgette@georgette.com",
    role: "provider",
    skills: ["writing"],
    age: 24,
    address: "Kreuzbergstrasse 10, 10965 Berlin Deutschland",
    picture: "https://i.imgur.com/1IcdnSv.jpg",
    bio: "I'm Georgette!",
    reviews: [{
      user: "Georgette",
      comments: "I'm Georgette review"
    }]
  }
];

 const Threads = [
  {
    title: 'I will escort you to ABH and negotiate your flat contract',
    description: "I moved to Germany 10 years ago. I went from zero to hero in just 2 years! I rocked German bureucracy and breathed paperwork. I will translate stuff for you and also go to any places with you, because I'm such an an excellent communicator. Payment with €€ or if you are pretty we will see what we can do"
  },
  {
    title: 'I need an escort for ABH',
    description: "I can't stand these people and they always hate me for some reason when I try to speak Russian to them, can someone please help me and come with me DO SOMETHING HALP"
  },
  {
    title: "new in town",
    description: "Hi! I don’t speak German and I need some help doing my anmeldung at the Art. Its a 6:30 am so I am willing to pay 20 Euros to anyone that can help!"
  },
  {
    title: "George in the concrete jungle",
    description: "I know how to speak and read German, it's very fun. I want to meet you and help you! hourly rate is 25 EURO"
  },
  {
    title: "I am just so cool and can literally solve any of your problem",
    description: "P.S. I really REALLY need the money"
  }
 ];


User
  .create(Users)
  .then(allUsers => {
    console.log(`User is added`)
    // mongoose.connection.close()
  })
  .catch(error => {
    throw new Error(`User is not added. ${error.message}`)
  })

  Thread
  .create(Threads)
  .then(allThreads => {
    console.log(`Thread is added`)
    // mongoose.connection.close()
  })
  .catch(error => {
    throw new Error(`Thread is not added. ${error}`)
  })