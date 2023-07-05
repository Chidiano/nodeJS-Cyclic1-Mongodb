const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    name: String,
    colour: String,
    model: String,
});

module.exports = mongoose.model("Vehicle", vehicleSchema);