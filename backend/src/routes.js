const { Router } = require('express');
const DevContoller = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevContoller.index);
routes.post('/devs', DevContoller.store);

routes.get('/search', SearchController.index);

module.exports = routes;