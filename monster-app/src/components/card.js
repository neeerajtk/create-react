import React from 'react';
import './card.css';
var a=1;
const Card = props => (

    <div className='card-container'>
        {/* <img src={`https://robohash.org/${a++}?set=set2`}/> */}
        <img src={`https://robohash.org/${props.monster.id}?set=set2`}/>
        <h1>{props.monster.name}</h1>
    </div>
);


export default Card;