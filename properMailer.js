var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dannynodemailer@gmail.com',
    pass: '&Basic2019'
  }
});

var mailOptions = {
  from: 'dannynodemailer@gmail.com',
  to: 'bensonsamraj@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});