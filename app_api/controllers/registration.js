const mongoose = require('mongoose');
const event = mongoose.model('Event');
 

 
const eventsList = function(req, res) {
	console.log('in eventsList');
event
	.find() 
	.exec((err, ev) => { 
		res 
			.status(200) 
			.json(ev); 
	});
};

 
/////
const eventsRead = function (req, res) {
  if (req.params && req.params.eventid) {  
    event
      .findById(req.params.eventid)
      .exec((err, ev) => {
        if (!ev) {
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
          .json(ev);
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
location: req.body.location,
town: req.body.town
},
(err, ev) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(ev);
}
});
};







 

module.exports = {
eventsList, 
 eventsRead, 
eventCreate
 

} ;