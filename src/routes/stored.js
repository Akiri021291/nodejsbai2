const express = require('express');
const router = express.Router();
const storedController = require('../app/controllers/storedcontroller');

// lay phuong thuc

router.get('/course', storedController.stored);

module.exports = router;
