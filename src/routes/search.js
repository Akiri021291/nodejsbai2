const express = require('express');
const router = express.Router();
const searchController = require('../app/controllers/searchcontroller');

// lay phuong thuc
router.get('/:slug', searchController.show);
router.get('/', searchController.search);
module.exports = router;
