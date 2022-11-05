const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
surname: {
type: String,
required: true
},
address: {
type: String,
required: true
},
phone: {
type: String,
minLength: 10,
maxLenght: 10,
required: true
}, 
email: String
password: {
type: String,
minLength: 8,
maxLength: 32,
required: true
},
dob: {
type: Date,
'default': Date.now
}
});



mongoose.model('members', memberSchema);