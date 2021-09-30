import React, {useState, useEffect} from 'react';
import Form from './Form.jsx';
import Results from './Results.jsx';
import Title from './Title.jsx';
import MyList from './MyList.jsx';
import axios from 'axios';


function App(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(''); //delete this after?
  const [myGames, setMyGames] = useState([]);
  useEffect(()=> {
    axios({
      method: 'get',
      url: '/games',
    })
    .then((data)=> {
      console.log(data.data);
      setMyGames(data.data);
    })
    .catch((err)=> {
      console.error(err)
    })
  }, [selectedItem])
  return (
    <>

    <div className='container'>
       <Title/>
    <div id='left'>
      <Form setSearchResults={setSearchResults}/>
    <Results data={searchResults} setSelectedItem={setSelectedItem}/>
    </div>
    <div id='right'>
      <MyList selectedItem={selectedItem} myGames={myGames}/>
    </div>

    </div>
    </>
  )
}

export default App;