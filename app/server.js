'use strict';

let express = require('express');
let app = express();

const PORT = 8080;
let vol_one = require('./vol1.js');

/* SERVER CONFIG */
app.set('views', __dirname + '/../public/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

/* ROUTES */
app.get('/', function (req, res) {
  res.render('index', { songs: vol_one });
});

app.listen(PORT, function () {
  console.log('Listening on ', PORT);
})