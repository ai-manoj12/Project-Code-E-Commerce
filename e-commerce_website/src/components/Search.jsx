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
  return (
  
  <> 
  <div>
    <input
      type="text"
      value = {input}
      className="search"
      placeholder="Search"
      onChange={inputHandler}
    />
    <button className='searchbutton' onClick={clickHandler}>Search</button> 
  </div>
  
  </>)
}

function clickAction({value}) {
  return (" ")
}




export default Search;


