import React from 'react';
import axios from 'axios';


function addGame(gameName) {
  axios({
    url: '/add',
    method: 'post',
    data: {
      name: gameName,
      priority: 5
    }
  })
}

function Results({data, setSelectedItem}) {
  return (
    <ul>
      {data.length!== 0 && data.map(game =>
        <li key={game.id} value={game.name} onClick={(e)=>{
          setSelectedItem(e.target.getAttribute('value'));
          console.log(e.target.getAttribute('value'));
          addGame(e.target.getAttribute('value'));
        }}>{game.name}</li>)}
    </ul>
  )
}

export default Results;