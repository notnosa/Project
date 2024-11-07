const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// parse form


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serves static files from the 'public' folder

// handle submission


app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;



    // You can add form validation and processing logic here

    console.log(`Received form data: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.send('Form submitted successfully!');
});

// start server


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});