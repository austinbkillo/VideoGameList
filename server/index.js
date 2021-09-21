const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.post('/search', (req, res) => {
  var data = `fields name; search "${req.body.title}";`;
  // var data = `fields *; where name = red dead`;
  var config = {
    method: 'post',
    url: 'https://api.igdb.com/v4/games',
    headers: {
      'Client-ID': process.env.ClientID,
      'Authorization': process.env.Authorization,
      'Content-Type': 'text/plain'
    },
    data : data
  };
axios(config)
.then(function (response) {
  res.send(response.data)
})
.catch(function (error) {
  console.log(error);
  res.end();
});
})


app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`)
})

