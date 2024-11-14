const { sendLogWhatsApp } = require('../services/greenApiService');

const logsWhatsApp = async (req, res) => {
    const { groupId, message } = req.body;
    try {
        await sendLogWhatsApp(groupId, message);
        res.status(200).json({ status: 'Log sent to WhatsApp group successfully' });
    } catch (error) {
        res.status(500).json({ status: 'Failed to send log to WhatsApp group', error });
    }
};

module.exports = { logsWhatsApp };
