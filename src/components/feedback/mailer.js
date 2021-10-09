require('dotenv').config()
const nodemailer= require('nodemailer')



let mailOptions = {
    from: 'mytrofanovguru@gmail.com',
    to: 'mytrofanovmaxym@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail for GeeksforGeeks'
};

transport.sendMail(mailOptions)