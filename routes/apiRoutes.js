// Displays all characters
app.get("/api/reserve", function (req, res) {
    return res.json(tables);
});

// Displays a single character, or returns false
app.get("/api/tables", function (req, res) {
    var chosen = req.params.tables;
});