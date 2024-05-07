 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// define the Schema (the structure of the article)
const dataSchema = new Schema({
    username: String
  });
   // Create a model based on that schema
const Data = mongoose.model("Dataa", dataSchema);
 
 
// export the model
module.exports = Data;