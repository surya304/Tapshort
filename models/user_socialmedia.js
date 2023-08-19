var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//MongoDB schemas
var Schema = mongoose.Schema;


// create a schema
var userSocialMediaSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    socialmedia: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialMedia', required: true },
    shorturl: { type: mongoose.Schema.Types.ObjectId, ref: 'UserShortURL', required: true },
    username: { type: String, required: true },
    order: { type: Number },
    is_del: { type: Boolean, default: false },
    is_active: { type: Boolean, default: true },
    created_at: Date,
    updated_at: Date
});

var UserSocialMedia = mongoose.model('UserSocialMedia', userSocialMediaSchema);

module.exports = UserSocialMedia;