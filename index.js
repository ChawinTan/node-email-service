const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
       user: 'xxx@gmail.com',
       pass: 'pass'
    }
})

const message = {
  from: 'xxx@gmail.com', // Sender address
  to: 'receipient@email.com',         // List of recipients
  subject: 'Design Your Model S | Tesla', // Subject line
  html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>' // html
};
transport.sendMail(message, function(err, info) {
  if (err) {
    console.log(err)
  } else {
    console.log(info);
  }
});