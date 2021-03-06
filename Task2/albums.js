const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema({
  name: String,
  artist: String,
  songs: [{ type: Schema.Types.ObjectId, ref: "Song" }]
});

module.exports = mongoose.model("Album", albumSchema);
