const express = require('express');
const router = express.Router();
const ctrlRegistration = require('../controllers/registration');

// Events
router
  .route('/events/:eventid')
  .get(ctrlRegistration.eventsRead);

router
  .route('/events')
  .get(ctrlRegistration.eventsRead)
  .post(ctrlRegistration.eventCreate);


module.exports = router;

