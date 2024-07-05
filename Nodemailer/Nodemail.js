//Server generated
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
const Port=3000;

const transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: "aimefils173@gmail.com",
    pass: "password"
  }
});



app.get('/', (req, res) => {
  const mailOptions = {
    from: req.body.from,
    subject: req.body.subject,
    mess: req.body.message
  };
  transporter.sendMail(mailOptions, (error) => {
     if(error){
       return res.status(500).send(error);
     }
     res.status(200).send("Email sent successfully");
  });
})


app.listen(Port, () => {
 console.log('This is pp is running')
});