import React, {useState, useEffect} from 'react';
import Form from './Form.jsx';
import List from './List.jsx';


function App(props) {
  const [game, setGame] = useState('');
  return (
    <>
    <Form setGame={setGame}/>
    <List game={game}/>
    </>
  )
}

export default App;