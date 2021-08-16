import React, {useState, useEffect} from 'react';

 function Form({setGame}){
   const handleGameChange = (e) => {
     console.log(e.target.value);
     setGame(e.target.value);
   }
  return (
    <input type="text" onChange={handleGameChange}/>
  )
}

export default Form;
