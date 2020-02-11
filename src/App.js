import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.js'
import SearchBox from './components/search-box/search-box.component';

function App() {
  const [searchField, setSearchField] = useState('');

  const handleChange = input => {setSearchField(input.target.value)};
  
  return (
      <div className="App">
        <div>
          <h1>Robots Rolodex</h1>
          <SearchBox
          placeholder='search monsters'
          handleChange={handleChange}
          />
          <CardList searchField={searchField}/>
        </div>
    </div>
  );
}




export default App;
