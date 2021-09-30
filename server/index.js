const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = 8080;
const {Sequelize, DataTypes} = require('sequelize');

const user = 'austinkillough'
const host = 'localhost'
const database = 'videogamelist'
const port = '5432'
const password = '';

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

const sequelize = new Sequelize(database, user, password, {
  host: host,
  port: port,
  dialect: 'postgres'
})

sequelize
.authenticate()
.then(()=>{
  console.log('connection established successfully');
})
.catch((err)=>{
  console.error('unable to connect to database: ', err)
})
const Game = sequelize.define('game', {
  //model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'games'
})
// Game.sync({ alter: true });
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

app.post('/add', (req, res) => {
  Game.create({
    name: req.body.name,
    priority: req.body.priority
  })
  .then((data)=>{
    res.status(200).send(data)
  })
  .catch((err)=>{
    res.status(400).send(err);
  })
})

app.get('/games', (req, res) => {
  Game.findAll()
  .then((data) => {
    res.send(data);
  })
  .catch((err)=> {
    res.send(err);
  })
})

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`)
})

