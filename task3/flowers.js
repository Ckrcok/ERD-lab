const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
  flowerName: String
});

module.exports = mongoose.model("Flower", flowerSchema);
