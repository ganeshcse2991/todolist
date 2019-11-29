const express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('<h1>Welcome SRIT!</h1>');
});

var server = app.listen(process.env.PORT || 3000, function () {
  console.log('App started successfully. Listening to pot 3000');
});

