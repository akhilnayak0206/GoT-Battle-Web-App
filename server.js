const express = require('express');

const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/list', require('./routes/api/list'));
app.use('/count', require('./routes/api/count'));
app.use('/search', require('./routes/api/search'));

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
