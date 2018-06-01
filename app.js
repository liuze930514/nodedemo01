const express = require("express");

const app = express();

app.use("/public", express.static(__dirname + "/public"));

const userInfo = require("./userInfo/users");


console.info(userInfo);