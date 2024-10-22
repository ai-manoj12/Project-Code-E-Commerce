import React from 'react';
import { useState } from 'react';

function Search() {
  const [input, setInput] = useState("");
  const clickHandler = () => {
    const newInput = clickAction(input);
    setInput(newInput);
  };
  const inputHandler = (e) => {
    if(e.target.value !== "") {
      setInput(e.target.value);
    }
  }
  return (<> <input
    type="text"
    value = {input}
    className="search"
    placeholder="Search"
    onChange={inputHandler}
  />
  <button className='searchbutton' onClick={clickHandler}>Search</button> 
  </>)
}

function clickAction({value}) {
  return (" ")
}




export default Search;


//favorites, move everything down, 

//favoriting a product
//name, netid
//changing email
//profile image if someone set it up
// what products that sellers are selling

