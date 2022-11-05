

/* GET 'home' page */
const homelist = function(req, res){
res.render('registration', { 
title: 'Home',

});
 };
  
// log in page 
 
const login = function(req, res){
res.render('login', { 
title: 'Log In' 
});
};
 
// Events page 
const _renderEvents = function(req, res){
res.render('events', {
title: 'Events', 
pageHeader: {
title: 'Events',
strapline: 'Find all our events scheduled for you!'
},
sidebar: "Pick the events that you are interested the most. Lokking forward to seeing you!",
event: responseBody 
});
}; // end render events
 

const events = function(req, res){
const path = '/api/events'; 
const requestOptions = { 
url : apiOptions.server + path, 
method : 'GET', 
json : {}, 
/*
qs : { 
lng : -0.9690884, 
lat : 51.455041, 
maxDistance : 20 
} 
*/
}; 
request(requestOptions, (err, response, body) => { 
_renderEvents(req, res); 
} 
);
}; // end events

request(
requestOptions,function(err, response, body) {
_renderEvents(req, res, body); 
}
);








module.exports = {
homelist,
login,
events
};

