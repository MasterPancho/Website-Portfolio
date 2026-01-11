const { Resend } = require('resend');                                           //Library to send emails using Resend service                           
const express = require('express');                                             //Simplify process of building web servers (handle HTTP request, routes, middleware...)     
const cors = require('cors');                                                   //Allows for cross-origin resource sharing (CORS) in the server (requests from different domains)
const validator = require('validator');                                         //To validate and sanitize user inputs
require('dotenv').config();                                                     //Load environment variables from a .env file into process.env

const resend = new Resend(process.env.RESEND_API_KEY);                                                  //Resend with API key
const app = express();                  
const PORT = process.env.PORT                                                   //Port the server will listen on. Else, it will default to 5000 (when it runs locally for instance)

app.use(cors({origin: 'https://masterpancho.github.io'}));                      //Allows for requests from Github Pages domain            
app.use(express.json());                                                        //Middleware to parse incoming data raquests with JSON payloads (user info). Use req.body to handle this data
            
//POST route at /send-email to handle sending email requests            
app.post('/send-email', async (req, res) => {                                   //async for non-blocking code execution
    
    //Extract user data from request body
    const { name, email, message } = req.body;                                  

    //Verify input data
    if(!name || !email || !message)
        return res.status(400).json({error: 'All fields are required.'});       //res.status(400) -> Sends a bad request status code
           
    if (!validator.isEmail(email))                                               //Checks if email is valid
        return res.status(400).json({ error: 'Invalid email address.' });

    // Input Sanitization
    const sanitizedName = validator.escape(name);                             
    const sanitizedEmail = validator.normalizeEmail(email);                             
    const sanitizedMessage = validator.escape(message);

    try{
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.GMAIL_USER,
            subject: `New message from ${sanitizedName} (${sanitizedEmail})`,
            html: `<p><strong>Name:</strong> ${sanitizedName}</p>
                   <p><strong>Email:</strong> ${sanitizedEmail}</p>
                   <p><strong>Message:</strong> ${sanitizedMessage}</p>`,
        });
        res.status(200).json({message: 'Email sent successfully!'});              //res.status(200) -> Sends a success status code
    }

    catch (error){
        console.error('Error sending email:', error);
        res.status(500).json({error: 'Failed to send email.'});                 //res.status(500) -> Sends an internal server error status code
    }
});

//Starts server on the specified PORT 
app.listen(PORT, () => {
    console.log(`Server is running on this host: http://localhost:${PORT}`);
});