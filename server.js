
var express = require("express");
const path = require("path");
var app = express();
var PORT = process.env.PORT || 8089;


var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory

app.use(express.static(path.join(__dirname, "public")));


var exphbs = require("express-handlebars");
app.set("views", path.join(__dirname, "views"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Routes
// =============================================================
var apiRoute = require("./routes/api-routes.js");
// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});
