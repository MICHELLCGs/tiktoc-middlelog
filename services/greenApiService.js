const axios = require('axios');

// Función para enviar OTP a un cliente de WhatsApp
const sendOtpWhatsApp = async (recipient, code) => {
    const url = `https://api.green-api.com/waInstance${process.env.GREEN_API_INSTANCE_ID}/sendMessage/${process.env.GREEN_API_TOKEN}`;
    const data = {
        chatId: `${recipient}@c.us`, // Para clientes individuales, usa @c.us
        message: `Your OTP code is: ${code}`
    };
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error sending OTP:', error.response ? error.response.data : error.message);
        throw new Error('Failed to send OTP');
    }
};

// Función para enviar logs a un grupo de WhatsApp
const sendLogWhatsApp = async (groupId, message) => {
    const url = `https://api.green-api.com/waInstance${process.env.GREEN_API_INSTANCE_ID}/sendMessage/${process.env.GREEN_API_TOKEN}`;
    const data = {
        chatId: `${groupId}`, // Para grupos, usa @g.us
        message: message
    };
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error sending log to WhatsApp group:', error.response ? error.response.data : error.message);
        throw new Error('Failed to send log to WhatsApp group');
    }
};

module.exports = { sendOtpWhatsApp, sendLogWhatsApp };
