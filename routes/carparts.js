const express = require('express')
const router= express.Router();
const Post = require('../models/db_model')

router.get( '/carparts', (req, res) => {


    try {
        const carparts = await carparts.find();
        res.json(carparts);

    }catch (err){
        res.json({message: err});
    }
});


router.post('/', async (req,res) => {
    const post = new Post( {
Manufacturer: req.body.Manufacturer,
Model: req.body.Model,
Part: req.body.Part,
Price: req.body.Price
    });
    try {
    const savpost = await post.save();
    res.json(savpost);
    } catch (err) {
        res.json({message: err});
    }

//console.log.apply(req.body);
});

module.exports = router;

