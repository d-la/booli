const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema (
	{
		firstname: {type: String, required: true},
		lastname: {type: String, required: true},
		role: {type: String, required: true},
		emailaddress: {type: String, required: true, unique: true},
		password: {type: String, required: true},
	}
);

const User = mongoose.model('User', UserSchema, 'users');
module.exports = User;