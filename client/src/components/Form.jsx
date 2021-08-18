import React, {useState, useEffect} from 'react';
const axios = require('axios');

 function Form({setTitle}){
   const [value, setValue] = useState('');

   const handleTitleChange = (e) => {
     console.log(e.target.value);
     setValue(e.target.value);
   }
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('submitted value is: ', value)
     setTitle(value);
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
       console.log('response comes back with', response.data)
     })
     .catch((error)=> {
       console.error(error);
     })
   }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={value} onChange={handleTitleChange}/>
      <input type="submit" value="Search"/>
    </form>

  )
}

export default Form;
