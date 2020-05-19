import React from 'react';
import './search-box.style.css';

// jsx is functional component which does not related to the use and create of state
// we dont need to change state here because lateron we need to filter the state in cardlist [lifting state up]

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
    className='search'
    type='search' 
    placeholder={placeholder}
    onChange={handleChange}/>
)