const express = require ('express');
const router = express.Router();
const siteController = require('../app/controllers/sitecontroller');
router.use('/test',siteController.test);
router.use('/',siteController.home);
module.exports=router




