import React from 'react';

function Results({data, setSelectedItem}) {
  return (
    <ul>
      {data.length!== 0 && data.map(game =>
        <li key={game.id} value={game.name} onClick={(e)=>{
          setSelectedItem(e.target.getAttribute('value'));
          console.log(e.target.getAttribute('value'));
        }}>{game.name}</li>)}
    </ul>
  )
}

export default Results;