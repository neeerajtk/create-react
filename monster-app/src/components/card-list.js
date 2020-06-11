import React from 'react';
import './card-list-styles.css';


const Cardlist = props => (
        <div className="card-list">
            {props.monsters.map(monster=>(
                <h1 key={monster.id}>{monster.name}</h1>
            ))}
        </div>

);
export default Cardlist;