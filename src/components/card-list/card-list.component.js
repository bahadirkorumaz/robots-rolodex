import React, { useState, useEffect } from 'react';
import Card  from '../card/card.component.js'
import './card-list.styles.css';


export default function CardList(props) {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  });

  const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(props.searchField.toLowerCase()));

    return (
    <div className='card-list'>{filteredMonsters.map(monster => (<Card key={monster.key} monster={monster}/>))}</div>
  );
}


