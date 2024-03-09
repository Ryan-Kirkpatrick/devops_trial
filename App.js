const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(8080, () => {console.log("Running on localhost:8080.")});