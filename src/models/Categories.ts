import mongoose from "mongoose";
const timestamps = require("mongoose-timestamp");

var Schema = mongoose.Schema;

var CategoriesModel = new Schema({
  title:  String,
  description: String
});

CategoriesModel.plugin(timestamps);
module.exports = mongoose.model("Categories", CategoriesModel);