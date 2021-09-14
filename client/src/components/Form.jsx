import React, {useState, useEffect} from 'react';
const axios = require('axios');

 function Form({setSearchResults}){
   const [value, setValue] = useState('');
   const [search, setSearch] = useState('');

   const handleTitleChange = (e) => {
     setValue(e.target.value);
   }
   useEffect(()=>{
    axios({
      method: 'post',
      url: '/search',
      headers: {
        'content-type': 'application/json'
      },
      data: {
        title: value
      }
    }).then((response) => {
      console.log(response.data);
      setSearchResults(response.data);
    })
    .catch((error)=> {
      console.error(error);
    })
   }, [search])
  return (
    <form>
      <input type="text" name="title" value={value} onChange={handleTitleChange}/>
      <input type="button"value="Search" onClick={()=>{
        setSearch(value);
      }}/>
    </form>

  )
}

export default Form;
