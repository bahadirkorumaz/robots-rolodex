import React from 'react';
import Card  from '../card/card.component.js'
import './card-list.styles.css';


export default function CardList(props) {
    return (
    <div className='card-list'>{props.monsters.map(monster => (<Card key={monster.key} monster={monster}/>))}</div>
  );
}


