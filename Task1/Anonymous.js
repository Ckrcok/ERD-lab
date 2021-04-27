const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const anonSchema = new Schema({
  anonData: { type: Schema.Types.anonData }
});

const memeSchema = new Schema({
  name: String,
  accessURL: String,
  anonSchema: anonSchema
});

module.exports = mongoose.model("Meme", memeSchema);
