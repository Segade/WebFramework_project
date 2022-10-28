var express = require('express');
var router = express.Router();



/* GET home page. */
/* 
router.get('/', function(req, res, next) {
  res.render('registration', { title: 'Express' });
});
*/
 
 
const ctrlPage = require('../controllers/registration'); 

router.get('/', ctrlPage.homelist);

router.get('/login', ctrlPage.login);

router.get('/events', ctrlPage.events); 
module.exports = router;
