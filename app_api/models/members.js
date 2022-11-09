const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
name: String,
surname: String,
address: String,
phone: String,
email: String
password: String,
dob: {
type: Date,
'default': Date.now
}
});



mongoose.model('members', memberSchema);