const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('OMG!!!!!');
});

app.listen(8080, () => {console.log("Running on localhost:8080")});