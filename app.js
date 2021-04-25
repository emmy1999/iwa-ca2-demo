const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv').config()
app.use(bodyParser.json());

// Routes Declare
const postsRoute = require('./routes/carparts');

app.use('/carparts', postsRoute);
//app.use('/user', userRoute)

//Routes
app.get('/',  (req,res)=> {
    res.send('We are on home');
});







// connecting to database
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const dbc = mongoose.connection

dbc.once('open', () => console.log('Connected to Database!'))
dbc.on('error', (error) => console.error(error))





app.listen(4000, () => console.log('Server Started'))