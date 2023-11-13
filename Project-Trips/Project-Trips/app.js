// ℹ️ Gets access to environment variables/settings

require("dotenv").config();


require("./db");



const express = require("express");



const hbs = require("hbs");

const app = express();


require("./config")(app);
require("./config/session.config")(app)

const capitalize = require("./utils/capitalize");
const projectName = "Project-Trips";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


require("./routes")(app)


require("./error-handling")(app);

module.exports = app;
