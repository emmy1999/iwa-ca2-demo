const express = require('express')

const Part = require('../models/carpart-m')
const router = express.Router()


router.get('/new', (req, res) => {
res.render('carparts/new_part')


})

router.get('/:id', (req,res)=> {

} )

router.post('/', async (req, res)=> {
const part = new Part({
     Manufacturer: req.body.Manufacturer,
  Model: req.body.Model,
  Part: req.body.Part,
  Price: req.body,Price,
})
try {
await part.save();
res.redirect(`/carparts/${part.id}`)
} catch (e) {
res.render('carparts/new_part', {part : part})
}

})

module.exports = router