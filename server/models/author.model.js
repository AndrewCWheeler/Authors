const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "The author's name field is required to submit."],
      minlength: [3, "The author's name must be at least 3 characters long."],
    },
    quote: {
      type: String,
      minlength: [
        3,
        'If you wish to include a quote from this author, make sure it is at least 3 characters long.',
      ],
    },
  },
  { timestamps: true }
);

module.exports.Author = mongoose.model('Author', AuthorSchema);
