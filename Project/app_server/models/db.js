 

const mongoose = require('mongoose');
const dbURI = "mongodb+srv://secaiv:A1kalina@cluster0.hwsu78d.mongodb.net/Locator?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./events');

