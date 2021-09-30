import React from 'react';


function MyList({selectedItem, myGames}) {
  let listItems = myGames.map((game) => {
    return (<li className='myli' key={game.id}>{game.name}</li>)
  });


  return (
    <div>
    <h3>My List of Games</h3>
    <ul>
      {listItems}
      </ul>
    </div>
  )
}

export default MyList;