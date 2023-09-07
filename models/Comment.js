
const React = require('react');

const commentSchema = new mongoose.Schema({
  body: {type: String, required: true},
  author: {type: String, required: true},
  replies: [{
      body: {type: String, required: true},
      author: {type: String, required: true}
  }]
});

module.exports = Tweet;