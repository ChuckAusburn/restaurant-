app.get("/api/reserve", function (req, res) {
    return res.json(tables);
});

app.get("/api/tables", function (req, res) {
    var chosen = req.params.tables;
});