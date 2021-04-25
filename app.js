const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv').config()
app.use(bodyParser.json());

// Routes Declare
const partRouter = require('./routes/carparts')

app.set('view engine', 'ejs')

// routes aricle
app.use('/part', partRouter)


//Render html file
app.get('/',  (req,res)=> {
   const parts = [{   
  Manufacturer: 'Audi',
  Model: 'Q5',
  Part: 'Head Lamp',
  Price: 243.56,
  LastUpdated: new Date(),
   }  ]

    res.render('index' , {parts: parts})
})


// connecting to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const dbc = mongoose.connection

dbc.once('open', () => console.log('Connected to Database!'))
dbc.on('error', (error) => console.error(error))





app.listen(4000, () => console.log('Server Started'))