// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();


// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

function json (url){
  return fetch(url).then((res)=>{
    return res.json()
  })
}
app.get('/api/whoami', function (req, res) {
  
const apiKey ="4f746c76e3394ef6499f4cc7fbfa3252acb793b4e629fd6476f58e1b"
json(`https://api.ipdata.co?api-key=${apiKey}`).then((res)=>{
  console.log(res)
})

  res.json({"ipaddress":"162.158.158.197","language":"en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7","software":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"});
});

// listen for requests :)
var listener = app.listen( 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
