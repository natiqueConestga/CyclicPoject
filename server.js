// var HTTP_PORT = process.env.PORT || 8080;
// var express = require("express");
// var app = express();

// // setup a 'route' to listen on the default url path
// app.get("/", (req, res) => {
//   res.send("Hello World! _ New changes");
// });

// // setup http server to listen on HTTP_PORT
// app.listen(HTTP_PORT);

var express = require("express");
const path = require("path");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// setup another route to listen on /about
app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "./pages/about.html"));
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);
