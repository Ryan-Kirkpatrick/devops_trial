const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.listen(80, () => {console.log("Running on localhost:80.")});
app.listen(80, () => {console.log("Running on localhost:80.")});