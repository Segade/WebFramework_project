const mongoose = require('mongoose');
 
const Member = mongoose.model('Member');


// members
const memberCreate = function(req, res) {
Member.create({ 
name: req.body.name,
surname: req.body.surname,
address: req.body.address,
phone: req.body.phone,
email: req.body.email,
password: req.body.password,

}, (err, Member) => { 
if (err) {
res
.status(400)
.json(err);
} else {
res
.status(201)
.json(Member);
}
});
};


const membersList = function(req, res) {
	console.log('in membersList');
Member
	.find() 
	.exec((err, mem) => { 
		res 
			.status(200) 
			.json(mem); 
	});
};

const memberRead = function (req, res) {
  if (req.params && req.params.memberid) {  
    Member
      .findById(req.params.memberid)
      .exec((err, mem) => {
        if (!mem) {
          res	
            .status(404) 
            .json({	
              "message": "memberID not found"
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
          .json(mem);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No memberid in request"
      });		
  }
};




module.exports = {
memberCreate,
memberRead,
membersList
};