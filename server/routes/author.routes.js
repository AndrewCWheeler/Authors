const AuthorController = require('../controllers/author.controller');

module.exports = function (app) {
  app.get('/api', AuthorController.index);
  app.get('/api/authors', AuthorController.allAuthors);
  app.get('/api/authors/:id', AuthorController.oneAuthor);
  app.post('/api/authors', AuthorController.newAuthor);
  app.put('/api/authors/:id', AuthorController.editAuthor);
  app.delete('/api/authors/:id', AuthorController.deleteAuthor);
};
