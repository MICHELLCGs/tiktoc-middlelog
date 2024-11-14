const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const otpRoutes = require('./routes/otpRoutes');
const alertRoutes = require('./routes/alertRoutes');

app.use('/api', otpRoutes);
app.use('/api', alertRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
