const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  flowers: [{ type: Schema.Types.ObjectId, ref: "Flower" }]
});

module.exports = mongoose.model("User", userSchema);
