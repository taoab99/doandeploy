const express = require('express');
const router = express.Router();
const siteController = require('../controller/siteController');

router.get('/accounts', siteController.getaccount)
router.get('/', siteController.index);


module.exports = router;