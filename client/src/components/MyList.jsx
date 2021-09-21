import React from 'react';
let dummyData = [
  {name: 'Red Dead Redemption 2', date: '10/12/21', id: '111'},
  {name: 'Shogun somethin wars', date: '12/31/21', id: '222'},
  {name: 'AOE4', date: '06/23/21', id: '333'}
]

function MyList({selectedItem}) {
  let listItems = dummyData.map((game) => {
    return (<li key={game.id}>{game.name}, {game.date}</li>)
  });


  return (
    <div id='right'>
    <h3>My List of Games</h3>
    <ul>
      <li>{selectedItem}</li>
      {listItems}</ul>
    </div>
  )
}

export default MyList;