const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
name: String,
Hour: String,
day: String,
location: String,
town: String
});

mongoose.model('events', eventSchema);