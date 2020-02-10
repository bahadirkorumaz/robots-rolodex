import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.js'
import SearchBox from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  });

  const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
  const handleChange = input => {setSearchField(input.target.value)};
  
  return (
      <div className="App">
        <div>
          <h1>Robots Rolodex</h1>
          <SearchBox
          placeholder='search monsters'
          handleChange={handleChange}
          />
          <CardList monsters={filteredMonsters}/>
        </div>
    </div>
  );
}




export default App;
