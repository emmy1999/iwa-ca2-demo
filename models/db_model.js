const mongoose = require('mongoose');

const carpartSchema = mongoose.Schema ({
 Manufacturer: {
   type:  String,
   required: true
 },
Model: {
   type:  String,
   required: true
 },
Part:{
   type:  String,
   required: true
 },
Price: {
   type:  Double,
   required: true
 },
});

module.exports = mongoose.model('carparts', carpartPostSchema);