const express = require('express');
const router = express.Router();
const { logsWhatsApp } = require('../controllers/alertController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/logs-whatsapp', authMiddleware, logsWhatsApp);

module.exports = router;
