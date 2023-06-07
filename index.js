// Import necessary libraries and dependencies
import express from 'express';
import session from 'express-session';
import nodemailer from 'nodemailer';
// Create an instance of the Express application
const app = express();
// Use the session middleware to enable session-based authentication
app.use(session({
 secret: 'super_secret_key',
 resave: false,
 saveUninitialized: false,
 cookie: { secure: true }
}));
// Create an instance of the nodemailer transport
const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
 user: 'example@gmail.com',
 pass: 'password'
 }
});
// Define a route for creating a new user
app.post('/users', (req, res) => {
 // Create a new user record in the database
 const userId = createUser(req.body.username, req.body.password);
 
 // Generate a one-time password and store it in the session
 const oneTimePassword = generateOneTimePassword();
 req.session.oneTimePassword = oneTimePassword;
 
 // Send an email with the one-time password link to the user
 const mailOptions = {
 from: 'example@gmail.com',
 to: req.body.email,
 subject: 'One-Time Password Link',
 text: `Hello ${req.body.username},\n\nClick the following link to set your password:\nhttp://localhost:3000/password?otp=${oneTimePassword}`
 };
 
 transporter.sendMail(mailOptions, (error, info) => {
 if (error) {
 console.log(error);
 res.status(500).send('Error sending one-time password link');
 } else {
 console.log('Email sent: ' + info.response);
 res.status(200).send('One-time password link sent successfully');
 }
 });
});
// Define a route for setting a new password with the one-time password
app.post('/password', (req, res) => {
 if (req.session.oneTimePassword === req.body.oneTimePassword) {
 setPassword(req.body.username, req.body.password);
 res.status(200).send('Password set successfully');
 } else {
 res.status(401).send('Invalid one-time password');
 }
});
// Start the application on port 3000
app.listen(3000, () => {
 console.log('Server started on port 3000');
});