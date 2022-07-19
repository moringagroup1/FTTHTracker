var mongoose = require('mongoose');

const Schema = mongoose.Schema;
//Define a schema
let ftthSchema = new Schema({
    'name'       : String,
    'email'      : String,
    'prob_desc'  : String,
    'ticket'     : String,
    'phone'      : Number
})
// Create a model from the schema
let Ftth = mongoose.model('ftth', ftthSchema);

// Export it
module.exports = Ftth;
