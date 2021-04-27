const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
  username: String,
  flowername: String
});

module.exports = mongoose.model("Flower", flowerSchema);
