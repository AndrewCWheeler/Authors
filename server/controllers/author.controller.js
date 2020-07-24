const { Author } = require('../models/author.model');

module.exports = {
  // index
  index: (req, res) => {
    res.json({ message: 'Working' });
  },
  // Read Methods --> app.get
  allAuthors: (req, res) => {
    Author.find({})
      .then(authors => res.json({ message: 'success', results: authors }))
      .catch(err => res.json({ message: 'error', results: err }));
  },
  oneAuthor: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then(author => res.json({ message: 'success', results: author }))
      .catch(err => res.json({ message: 'error', results: err }));
  },
  // Create Methods --> app.post
  newAuthor: (req, res) => {
    Author.create(req.body)
      .then(author => res.json({ message: 'success', results: author }))
      .catch(err => res.json({ message: 'error', results: err }));
  },
  // Update Methods --> app.patch
  editAuthor: (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
      runValidators: true,
      new: true,
    })
      .then(author => res.json({ message: 'success', results: author }))
      .catch(err => res.json({ message: 'error', results: err }));
  },
  // Delete Methods --> app.delete
  deleteAuthor: (req, res) => {
    Author.findOneAndDelete({ _id: req.params.id })
      .then(author => res.json({ message: 'success', results: author }))
      .catch(err => res.json({ message: 'error', results: err }));
  },
};
