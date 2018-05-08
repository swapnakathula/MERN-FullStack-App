const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//const logger = require('morgan');
const path = require('path');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// configure body parser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // set up logger
// app.use(logger('combined'))
// // serve up static assets
// app.use(express.static(path.join(__dirname, "client/build")));
// // set up routes
// app.use(routes);

// // Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect("mongodb://localhost/nytreact");

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/nytreact");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static(path.join(__dirname, "client/build")));
// Add routes, both API and view
app.use(routes);


// Start the API server
app.listen(PORT, function() {
  console.log(`API Server now listening on PORT ${PORT}!`);
});
