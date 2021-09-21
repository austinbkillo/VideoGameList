import React, {useState, useEffect} from 'react';
import Form from './Form.jsx';
import Results from './Results.jsx';
import Title from './Title.jsx';
import MyList from './MyList.jsx';


function App(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <>

    <div className='container'>
       <Title/>
    <div id='left'>
      <Form setSearchResults={setSearchResults}/>
    <Results data={searchResults} setSelectedItem={setSelectedItem}/>
    </div>
    <MyList selectedItem={selectedItem}/>
    </div>
    </>
  )
}

export default App;