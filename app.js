const express = require('express');
const port = 3000;
const path = require('path');

const indexRoute = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', indexRoute);

app.listen(port, err => {
    console.log(port);
});



