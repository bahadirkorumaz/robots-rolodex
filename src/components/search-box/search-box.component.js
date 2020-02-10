import React from 'react'
import './search-box.styles.css';

export default function SearchBox({placeholder, handleChange}) {
    return(
        <input type='search'
        placeholder={placeholder} 
        onChange={handleChange}/>
    );
}
