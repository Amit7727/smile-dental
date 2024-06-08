const nodemailer = require('nodemailer');

function sendEmail(html, to, subject) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: process.env.SEND_MAIL_AUTH_USER,
            pass: process.env.SEND_MAIL_AUTH_PASS,
        },
    });

    // Define the email options
    const mailOptions = {
        from: process.env.SEND_MAIL_AUTH_FROM,
        to,
        subject,
        html
    };

    // Send the email
    try {
        transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.dir(error);
        console.error('Error sending email:');
    }
}


module.exports = { sendEmail };