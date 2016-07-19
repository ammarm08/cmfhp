'use strict';

let express = require('express');
let app = express();

const PORT = 8080;

/* SERVER CONFIG */
app.set('views', __dirname + '/../public/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/../public'));

/* ROUTES */
app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT, function () {
  console.log('Listening on ', PORT);
})