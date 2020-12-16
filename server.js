// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
let includeMyApp = require('./myApp.js')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.route("/api/timestamp/:date")
.get((req, res) => {
  console.log("GET of timestamp!")
  console.log(req.params)
  res.json({
    unix: req.params.date,
    utc: req.params.date
  })
})
.post((req, res) => {
  console.log("POST of timestamp!")
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
