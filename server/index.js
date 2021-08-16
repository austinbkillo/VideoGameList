const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, '../public')))

app.get('/search', (req, res) => {
  console.log(process.env.ClientID, process.env.Authorization);
  var data = 'fields name; search "Red Dead";';
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
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
res.end();
})


app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`)
})

