const passport = require('passport');
const Account = require('../models/account');
var express = require('express');
var router = express.Router();


/* GET home page. */

 
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

// post for register
router.post('/registration', (req, res, next) => {
    Account.register(new Account({ username : req.body.username }), req.body.password, (err, account) => {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

//logout
router.get('/logout', (req, res, next) => {
    req.logout();
    req.session.save((err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
});



module.exports = router;
