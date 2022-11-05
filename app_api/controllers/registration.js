const mongoose = require('mongoose');
const event = mongoose.model('events');


 
const eventsList = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};

 
/////
const eventsRead = function (req, res) {
  if (req.params && req.params.eventid) {  
    event
      .findById(req.params.eventid)
      .exec((err, event) => {
        if (!event) {
          res	
            .status(404) 
            .json({	
              "message": "eventID not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(event);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No eventid in request"
      });		
  }
};

const eventCreate = function(req, res) {
event.create({ 
name: req.body.name,
hour: req.body.hour,
day: req.body.day,
town: req.body.town
},
(err, event) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(event);
}
});
};







// members
const memberCreate = function(req, res) {
member.create({ 
name: req.body.name,
surname: req.body.surname,
address: req.body.address,
phone: req.body.phone,
email: req.body.email,
password: req.body.password,

}, (err, member) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(member);
}
});
};




module.exports = {
eventsList, 
 eventsRead, 
eventCreate,
memberCreate

} ;