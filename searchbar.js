import React from 'react';

const SearchBar = ({ getAreaCode, searchAreaCode, areaCode }) => (
  <div>
    <input onChange={getAreaCode} value ={areaCode}></input>
    <button onClick={searchAreaCode()}>Search</button>
  </div>
);

export default SearchBar;

