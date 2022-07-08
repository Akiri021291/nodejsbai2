const express = require('express')
const router = express.Router();
const searchController = require('../app/controllers/searchcontroller');

// lay phuong thuc 
router.use('/:slug',searchController.show);
router.use('/',searchController.search);
module.exports=router
