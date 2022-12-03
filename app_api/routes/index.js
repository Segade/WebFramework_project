const express = require('express');
const router = express.Router();
const ctrlRegistration = require('../controllers/registration');
const ctrlMember = require('../controllers/members');

// Events
router
  .route('/events/:eventid')
  .get(ctrlRegistration.eventsRead)
  .post(ctrlRegistration.eventCreate);

router
  .route('/events')
  .get(ctrlRegistration.eventsList);

router
.route('/members')
  .get(ctrlMember.membersList)
.post(ctrlMember.memberCreate);

router
.route('/members/:memberid')
  .get(ctrlMember.memberRead);



module.exports = router;

