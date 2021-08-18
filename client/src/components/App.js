import React, {useState, useEffect} from 'react';
import Form from './Form.jsx';
import List from './List.jsx';


function App(props) {
  const [title, setTitle] = useState('');
  return (
    <>
    <Form setTitle={setTitle}/>
    <List title={title}/>
    </>
  )
}

export default App;