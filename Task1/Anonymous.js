const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anonSchema = new Schema({
  anonData: String
});

const memeSchema = new Schema({
  name: String,
  accessURL: String,
  anonSchema: { type: Schema.Types.anonData }
});

module.exports = mongoose.model("Meme", memeSchema);
