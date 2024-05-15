const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    surname: String,
})

module.exports = mongoose.model("Post", schema)