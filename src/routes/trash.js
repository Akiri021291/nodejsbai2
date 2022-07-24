const express = require('express');
const router = express.Router();
const trashController = require('../app/controllers/trashcontroller');

// lay phuong thuc

router.get('/course', trashController.trash);

module.exports = router;
