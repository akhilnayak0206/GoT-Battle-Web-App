const express = require('express');

const connectDB = require('./config/db');

const path = require('path');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/list', require('./routes/api/list'));
app.use('/count', require('./routes/api/count'));
app.use('/search', require('./routes/api/search'));

// Serve static assets i.e. React(Front End) build folder in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('client/build'));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
    // changed the above line from path.res(__dirname, 'client', 'build', 'index.html')); to allow reloading of the site & load through URL
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
