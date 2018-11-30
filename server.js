var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Add the application routes
require(path.join(__dirname, 'routes/apiRoutes.js'))(app);
require(path.join(__dirname, 'routes/htmlRoutes.js'))(app);

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
