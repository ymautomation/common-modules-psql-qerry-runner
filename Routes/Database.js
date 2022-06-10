const express = require("express");
const route = express.Router();
const { getConnectionString } = require("../Datatbase/db");

route.post("/", getConnectionString);

module.exports = route;
