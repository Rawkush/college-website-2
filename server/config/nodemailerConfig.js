const nodemailer = require('nodemailer');

const doEmail = (email, registrationKey) =>
  nodemailer.createTestAccount((err) => {
    if (err) {
      return Promise.reject(err);
    }
    const transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAILUSER,
        pass: process.env.EMAILKEY,
      },
    });
    const mailOptions = {
      from: `"CBPGEC" ${process.env.EMAIL}`,
      to: email,
      subject: 'Your registration key.',
      text: `Your registration key is ${registrationKey}`,
      html: `Your registration key is <strong>${registrationKey}</strong>`,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return Promise.reject(error);
      }
      return Promise.resolve(info);
    });
  });

module.exports = { doEmail };
