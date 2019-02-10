
// DEPENDENCIES
// Set up express NPM Package
var express = require("express");

// EXPRESS CONFIGURATION
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 9001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER
// The below code effectively "starts" our server
// displays log to confirm start
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});