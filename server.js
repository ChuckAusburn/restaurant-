var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;


app.get("/api/reserve", function (req, res) {
    return res.json(tables);
});

app.get("/api/tableData", function (req, res) {
    var chosen = req.params.tableDat;
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "public/reserve.html"));
});

app.get("/api/tables", function (req, res) {
    var chosen = req.params.tables;

    console.log(chosen);

    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
