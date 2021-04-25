const express = require('express')

//const Article = require('./../models/article')
const router = express.Router()


router.get('/part', (req, res) => {
res.send('In Parts')


})


module.exports = router