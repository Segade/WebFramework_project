const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
name: {
type:String,
required: true
},
Hour: {
type: String,
required: true
},
day: {
type: String,
required: true
}, 
location: {
type: String,
required: true
},
town: {
type :String,
required: true
}
});

mongoose.model('Event', eventSchema);