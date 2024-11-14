const { sendOtpEmail } = require('../services/emailService');
const { sendOtpWhatsApp } = require('../services/greenApiService');

const otpEmail = async (req, res) => {
    const { recipient, code } = req.body;
    try {
        await sendOtpEmail(recipient, code);
        res.status(200).json({ status: 'Email OTP sent successfully' });
    } catch (error) {
        res.status(500).json({ status: 'Email OTP failed to send', error });
    }
};

const otpWhatsApp = async (req, res) => {
    const { recipient, code } = req.body;
    try {
        await sendOtpWhatsApp(recipient, code);
        res.status(200).json({ status: 'WhatsApp OTP sent successfully' });
    } catch (error) {
        res.status(500).json({ status: 'WhatsApp OTP failed to send', error });
    }
};

module.exports = { otpEmail, otpWhatsApp };
