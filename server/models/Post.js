const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    userId: {
	type: Schema.ObjectId
    },
    title: {
	type: String,
	required: true
    },
    text: {
	type: String,
	required: true
    },
    createdAt: {
	type: Date,
	default: Date.now
    }

});

module.exports = mongoose.model('post',PostSchema);
