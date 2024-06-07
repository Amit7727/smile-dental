const nodemailer = require('nodemailer');

async function sendEmail(html, to, subject) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'smilecloudfamilydental@gmail.com',
            pass: 'limd jogj gifm mmnx',
        },
    });

    // Define the email options
    const mailOptions = {
        from: 'smilecloudfamilydental@gmail.com',
        to,
        subject,
        html
    };

    // Send the email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.dir(error);
        console.error('Error sending email:');
    }
}


module.exports = { sendEmail };