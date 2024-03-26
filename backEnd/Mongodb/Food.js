const mongoose = require("mongoose");
const foodData = require("../data.json")
mongoose.Promise = global.Promise;
const foodSchema = new mongoose.Schema({
  img: String,
  name: String,
    dsc: String,
    price:Number,
    rate:Number,
    
  });


const Food = mongoose.model("Food", foodSchema);
Food.insertMany(foodData)
module.exports = Food;