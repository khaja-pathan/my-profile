const express = require('express');
const router = express.Router();

const ProfileController = require('./profile.controller');

router.post('/create', ProfileController.create);
router.put('/update', ProfileController.update);
router.put('/delete', ProfileController.delete);

module.exports = router;
