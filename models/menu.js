const mongoose = require('mongoose');

var menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('menu', menuSchema);