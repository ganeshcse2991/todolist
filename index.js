import router from './src/routes'
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.get("/", function (req, res) {
  console.log(req.query.test);
  res.send('Welcome SRIT again');
})

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', function (req, res) {
//     res.send('<h1>Welcome SRIT!</h1>');
// });
app.use('/', router);
var server = app.listen(process.env.PORT || 3000, function () {
  console.log('App started successfully. Listening to pot 3000');
});
