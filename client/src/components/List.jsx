import React from 'react';

function List({data}) {
  return (
    <select size='5'>
      {data.map(game =>
        <option key={game.id}>{game.name}</option>)}
    </select>
  )
}

export default List;