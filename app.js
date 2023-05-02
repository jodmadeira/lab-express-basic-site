// Require the Express npm Package
const express = require('express');

// Express App
// Creating our server named app
const app = express();

// Make everything inside public available
app.use(express.static('public'));


//GET information from different pages
app.get('/home', (request, response, next) => {  //next parameter is optional
    response.sendFile(__dirname + '/views/1HomePage.html')
});

app.get('/about', (request, response, next) => {  //next parameter is optional
    response.sendFile(__dirname + '/views/2AboutPage.html')
});

app.get('/work', (request, response, next) => {  //next parameter is optional
    response.sendFile(__dirname + '/views/3WorksPage.html')
});

app.get('/gallery', (request, response, next) => {  //next parameter is optional
    response.sendFile(__dirname + '/views/4PhotoGallery.html')
});

// Start the server
app.listen(3000, () => console.log('App is listening on PORT 3000'));