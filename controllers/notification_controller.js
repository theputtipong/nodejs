const emailService = require('../services/email_service');
const smsService = require('../services/sms_service');
const pushService = require('../services/push_service');

const sendEmailNotification = async (req, res) => {
    const { to, subject, body } = req.body;

    try {
        await emailService.sendEmail(to, subject, body);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const sendSmsNotification = async (req, res) => {
    const { to, message } = req.body;

    try {
        smsService.sendSMS(to, message);
        res.status(200).json({ message: 'SMS sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const sendPushNotification = async (req, res) => {
    const { to, title, body } = req.body;

    try {
        await pushService.sendPush(to, title, body);
        res.status(200).json({ message: 'Push notification sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    sendEmailNotification,
    sendSmsNotification,
    sendPushNotification
};
