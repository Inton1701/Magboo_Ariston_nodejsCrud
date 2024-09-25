const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)

app.listen(8080)