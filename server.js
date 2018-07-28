var express = require("express");
var enforce = require("express-sslify");
var app = express();
var port = process.env.PORT || 3000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://marcin:marcin1@ds257851.mlab.com:57851/test-app");

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

/* serves main page */
app.get("/", function(req, res) {
  res.sendfile("index.html");
});

/* serves all the static files */
app.get(/^(.+)$/, function(req, res) {
  res.sendfile(__dirname + req.params[0]);
});

app.listen(port, function() {
  console.log("Listening on " + port);
});
