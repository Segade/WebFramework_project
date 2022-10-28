const express = require('express');
const router = express.Router();
const ctrlRegistration = require('../controllers/registration');

// Events
router
  .route('/events')
  .get(ctrlRegistration.eventsRead);

module.exports = router;

