import React from 'react';
import './card.css';
var a=1;
const Card = props => (

    <div className='card-container'>
        {/* <img src={`https://robohash.org/${a++}?set=set2&size=180x180`}/> */}
        <img src={`https://robohash.org/${props.monster.id}?set=set2`}/>
        <h2>{props.monster.name}</h2>
        <h3>{props.monster.email}</h3>
    </div>
);


export default Card;