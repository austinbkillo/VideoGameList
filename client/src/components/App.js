import React, {useState, useEffect} from 'react';
import Form from './Form.jsx';
import List from './List.jsx';


function App(props) {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <>
    <Form setSearchResults={setSearchResults}/>
    <List data={searchResults}/>
    </>
  )
}

export default App;