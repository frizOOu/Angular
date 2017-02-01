var mongoose = require('mongoose');

var objSchema = mongoose.Schema({
      param1: String,
   	param2: Date,
   	param3: String,
   	param4: Number,
   	param5: Date,
   	param6: String,
   	param7: Number, 
   	param8: Date,
   	param9: String,
   	param10: String,
   	param11: String,
   	param12: String,
   	param13: String,
   	param14: String,
   	param15: String,
   	param16: String,
   	param17: String,
   	param18: String,
   	param19: String,
   	param20: String
});

var model = mongoose.model('objs', objSchema);

module.exports = model;