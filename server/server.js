const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRouter = require('./routes');

let app = express();

app.use(cors());
app.use(express.json());

// app.use(express.static(path.join(__dirname, "../client")));

app.get('/', (req, res) => {
  res.send('go to localhost:3000/api/chirps to see chirps created and edited from Postman')
})

app.use('/api', apiRouter);

app.listen(3000);