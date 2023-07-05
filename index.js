require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/VehicleDB", {useNewUrlParser: true});