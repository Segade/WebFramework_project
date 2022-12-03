const passport = require('passport');
const Account = require('../models/account');
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
router.get('/registration', ctrlPage.member);
router.get('/login', ctrlPage.login);

router.get('/events', ctrlPage.events); 

// login
router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});




module.exports = router;
