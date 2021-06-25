const express = require('express');
const router = express.Router();
const siteController = require('../controller/siteController');

router.post('/accounts', siteController.createacount);
router.get('/getacounts', siteController.getacounts)
router.get('/', siteController.index);


module.exports = router;