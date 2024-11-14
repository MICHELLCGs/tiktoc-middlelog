const nodemailer = require('nodemailer');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

// Configuración del transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
});

// Función para enviar el OTP con plantilla
const sendOtpEmail = async (recipient, code) => {
    // Ruta al archivo de plantilla
    const templatePath = path.join(__dirname, '../templates', 'otp-template.html');

    // Lee la plantilla y renderiza el contenido con EJS
    const template = fs.readFileSync(templatePath, 'utf-8');
    const htmlContent = ejs.render(template, { code });

    // Configuración del correo
    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: recipient,
        subject: 'Código de verificación de TikToc',
        html: htmlContent
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { sendOtpEmail };
