

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

const events = function(req, res){
res.render('events', { 
title: 'Events' ,
 
 event: [{
name: 'Ghaelach Football',
hour: '12:30',
day: '01/DIC/2022',
location: 'Austin Stacks Park',
town: 'Tralee'
}
,
{
name: 'Hurling',
hour: '13:30',
day: '02/DIC/2022',
location: 'Fitzgerald Stadium',
town: 'Killarney'
}
,
{
name: 'Golf',
hour: '10:00',
day: '01/DIC/2022',
location: 'Tralee Golf Club',
town: 'Barrow'
}
,
{
name: 'Athletics',
hour: '11:45',
day: '03/DIC/2022',
location: 'Castleisland Athletics Club',
town: 'Castleislande'
}
,
{
name: 'Swimming',
hour: '16:00',
day: '02/DIC/2022',
location: 'Tralee Sports Complex',
town: 'Tralee'
}
,
{
name: 'Theatre',
hour: '20:00',
day: '01/DIC/2022',
location: 'Siamsa Tire, Tralee',
town: 'Tralee'
}
,
{
name: 'Irish dancing',
hour: '21:00',
day: '02/DIC/2022',
location: 'Ardfert Community Center',
town: 'Ardfert'
},

{
name: 'Salsa dancing',
hour: '21:30',
day: '01/DIC/2022',
location: 'Kilflynn Community Center',
town: 'Kilflynne'
}
,
{
name: 'Art Classes',
hour: '18:30',
day: '03/DIC/2022',
location: 'Ardfert Community Center',
town: 'Ardfert'
}
,
{
name: 'Opera',
hour: '20:00',
day: '02/DIC/2022',
location: 'Cork Opera House',
town: 'Cork'
}



]
});
};
 




module.exports = {
homelist,
login,
events
};

