import {Sequelize, DataTypes} from 'sequelize';

const user = 'austinkillough'
const host = 'localhost'
const database = 'videoGameList'
const port = '5432'


const sequelize = new Sequelize(database, user, {
  host: host,
  port: port,
  dialect: 'postgres'
})

const Game = sequelize.define('Game', {
  //model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
})