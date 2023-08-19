var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//MongoDB schemas
var Schema = mongoose.Schema;


// create a schema
var linkSchema = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  shorturl: {type: mongoose.Schema.Types.ObjectId, ref: 'UserShortURL', required: true},
  url  : { type: String, required: true, unique: true},
  title : { type: String, required: true},
  order : { type: Number},
  is_del : { type: Boolean, default: false },
  is_active : { type: Boolean, default: true },
  created_at : Date,
  updated_at : Date
});


var UserLink = mongoose.model('UserLink', linkSchema);

module.exports = UserLink;
