const express = require('express');
const routes = express.Router();
const crud = require('../controller/crud');

routes.get('/', crud.index);
routes.get('/create', crud.create);
routes.post('/save', crud.save);
module.exports = routes;