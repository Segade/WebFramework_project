const mongoose = require('mongoose');
/*
const eventSchema = new mongoose.Schema({
name: String,
Hour: Time,
day: String,
location: String,
town: String
});
*/

const eventSchema = new mongoose.Schema({
name: {
type: String, 
required: true 
}, 
hour: {
type: String,
required: true 
} ,
day: {
type: Date,
required: true,
'default': Date.now
},
location: {
type: String,
required: true
}, 
town: {
type: String, 
required: true
}
});

mongoose.model('events', eventSchema);