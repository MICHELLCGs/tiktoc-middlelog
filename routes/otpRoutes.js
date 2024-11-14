const express = require('express');
const router = express.Router();
const { otpEmail, otpWhatsApp } = require('../controllers/otpController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/otp-email', authMiddleware, otpEmail);
router.post('/otp-whatsapp', authMiddleware, otpWhatsApp);

module.exports = router;
